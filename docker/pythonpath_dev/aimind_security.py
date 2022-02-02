from tokenize import String
import requests
import jwt
import logging
from flask import current_app, redirect, g, flash, request as frequest
from flask_appbuilder.security.views import AuthDBView
from flask_appbuilder.security.views import expose
from flask_login import login_user
from superset.security.manager import SupersetSecurityManager
logger = logging.getLogger()

class CustomAuthDBView(AuthDBView):
    login_template = 'appbuilder/general/security/login_db.html'

    @expose('/login/', methods=['GET', 'POST'])
    def login(self):
        print("Ingrese en login")
        token = frequest.args.get('token')
        if not token:
            token = frequest.cookies.get('access_token')
        if token is not None:
            print("El token es: " + token)
            # Autentico contra backend yii2
            headers = {
                "Authorization": str("Bearer " + token),
                "Accept": "application/json",
                "Host": "lhtrfront.localhost.net"
            }
            res = requests.get("http://lhtrfront.localhost.net/api/me", headers=headers, allow_redirects=False)
            
            print('response from server:',res.text)
            # response from server: {"user_id":1,"firstname":"Maro","lastname":"Berasategui","PERNR":"00011750","es_jefe":0,"grupo_id":null,"equipo_id":null}
            
            print("El username es: " + res.firstname)
            user = self.appbuilder.sm.find_user(username=res.username)
            if not user:
                print("NOT USER")
            #   role_admin = self.appbuilder.sm.find_role('Admin')
            #   user = self.appbuilder.sm.add_user(user_name, user_name, 'aimind', user_name + "@aimind.com", role_admin, password = "aimind" + user_name)
            if user:
                print("SI, MAN ES USER")
                login_user(user, remember=False)
                redirect_url = frequest.args.get('redirect')
                if not redirect_url:
                    redirect_url = self.appbuilder.get_url_for_index
                return redirect(redirect_url)
            else:
                return super(CustomAuthDBView,self).login()
        else:
            flash('Unable to auto login', 'warning')
            return super(CustomAuthDBView,self).login()

class CustomSecurityManager(SupersetSecurityManager):
    authdbview = CustomAuthDBView

#    def __init__(self, appbuilder):
#        super(CustomSecurityManager, self).__init__(appbuilder)
