from flask_appbuilder.security.manager import AUTH_OID
from superset.security import SupersetSecurityManager
from flask_oidc import OpenIDConnect
from flask_appbuilder.security.views import AuthOIDView
from flask_login import login_user, logout_user, current_user
from urllib.parse import quote
from flask_appbuilder.views import ModelView, SimpleFormView, expose
from itertools import chain
from flask import (
    redirect,
    request,
    session,
    g, 
    url_for,
    get_flashed_messages
)
import logging
from pprint import pprint

class OIDCSecurityManager(SupersetSecurityManager):

    def __init__(self, appbuilder):
        super(OIDCSecurityManager, self).__init__(appbuilder)
        if self.auth_type == AUTH_OID:
            self.oid = OpenIDConnect(self.appbuilder.get_app)
        self.authoidview = AuthOIDCView
    #    # Agrega el filtro de autenticación
    #    self.appbuilder.get_app.before_request(self.require_login)
    
    # def require_login(self):
    #     # Permite las rutas de inicio de sesión y recursos estáticos sin autenticación
    #     if request.endpoint in ['AuthOIDCView.login', 'static']:
    #         return  # Permite la solicitud sin autenticación para estas rutas
        
    #     # Evita bucles de redirección
    #     if current_user.is_authenticated:
    #         return  # El usuario ya está autenticado, no redirigir

    #     # Evita redirigir si la solicitud ya está en la página de inicio de sesión
    #     if request.url == url_for('AuthOIDCView.login'):
    #         return  # No redirigir a la página de inicio de sesión si ya estamos en ella
        
    #     # Redirige al inicio de sesión con la URL de destino
    #     # request.url = http:// dashboard
    #     return redirect(url_for('AuthOIDCView.login', next=request.url))

class AuthOIDCView(AuthOIDView):

    @expose('/login/', methods=['GET', 'POST'])
    def login(self, flag=True):
        sm = self.appbuilder.sm
        oidc = sm.oid
        ##ARMAMOS LOS ROLES Y OBTENEMOS EL MAPEO DEL CONFIG
        superset_roles = ["Admin", "Alpha", "Gamma", "Public", "sql_lab", "Portal_v1"]
        role_mapping = self.appbuilder.get_app.config.get('AUTH_ROLES_MAPPING', {})
        default_role = "Gamma"
        
        @self.appbuilder.sm.oid.require_login
        def handle_login():
            get_flashed_messages()
            #kcEmail = oidc.user_getfield('email')
            #user = sm.auth_user_oid(kcEmail)
            # Busco por usuario y no por email
            kcUsername = oidc.user_getfield('preferred_username')
            user = sm.find_user(username=kcUsername)
            info = oidc.user_getinfo(['preferred_username', 'given_name', 'family_name', 'email','role_keys'])

            if user is None:
                user = sm.add_user(info.get('preferred_username'), info.get('given_name'), info.get('family_name'),
                                   info.get('email'), sm.find_role(default_role))

            kc_roles = chain.from_iterable([role_mapping[role] for role in info.get('role_keys', []) if role in role_mapping])
            
            roles = [role for role in kc_roles if role in superset_roles]
            #SINO ENCONTRAMOS ROLES ASIGNAMOS POR DEFECTO
            roles += [default_role] if not roles else []
            #Agregamos los roles al usuario y actualizamos
            user.roles = [sm.find_role(role) for role in roles]
            sm.update_user(user)
            login_user(user, remember=False)
            # return redirect(self.appbuilder.get_url_for_index)
            next_url = request.args.get('next')
            return redirect(next_url or self.appbuilder.get_url_for_index)

        return handle_login()

    @expose('/logout/', methods=['GET', 'POST'])
    def logout(self):
        oidc = self.appbuilder.sm.oid
        id_token = session.get('oidc_auth_token').get('id_token')
        redirect_url = request.url_root.strip('/') + self.appbuilder.get_url_for_login
        logoutUrlKeycloak = oidc.client_secrets.get('issuer') + '/protocol/openid-connect/logout?id_token_hint=' + id_token + '&post_logout_redirect_uri=' + quote(redirect_url)

        oidc.logout()
        super(AuthOIDCView, self).logout()
        logout_user()
        session.clear()
        return redirect(logoutUrlKeycloak)
