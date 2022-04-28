import logging
import random
import string
from base64 import urlsafe_b64decode
from urllib.parse import unquote, urlparse

import jwt
import requests
from flask import current_app, flash, g, redirect, request as frequest
from flask_appbuilder.security.views import AuthDBView, expose
from flask_login import login_user

from superset.security.manager import SupersetSecurityManager

logger = logging.getLogger()

class CustomAuthDBView(AuthDBView):
    login_template = 'appbuilder/general/security/login_db.html'

    @expose('/login/', methods=['GET', 'POST'])
    def login(self):
        print("%s CustomAuthDBView::login %s" % ("*" * 10, "*" * 10))
        token = frequest.args.get('token')
        AUTH_USER_ENDPOINT = unquote(frequest.args.get('endpoint', current_app.config.get('AUTH_USER_ENDPOINT')))

        if not token:
            token = frequest.cookies.get('access_token')

        if token is None:
            flash('Unable to auto login', 'warning')
            return super(CustomAuthDBView,self).login()

        AUTH_BEARER_HOST = urlparse(AUTH_USER_ENDPOINT).netloc.split(':')[0]

        # Autentico contra backend yii2
        headers = {
            "Authorization": f"Bearer {str(token)}",
            "Accept": "application/json",
            "Host": AUTH_BEARER_HOST
        }

        response = requests.get(AUTH_USER_ENDPOINT, headers=headers, allow_redirects=False)

        if not response.ok:
            return super(CustomAuthDBView, self).login()

        response = response.json()
        username = response.get('username', response.get('name'))
        user = self.appbuilder.sm.find_user(username=username)

        if not user:
            print("Usuario inexistente. Creando...")

            firstname = response.get('firstname', username)
            lastname = response.get('lastname', username)
            email = response.get('email')

            default_roles = current_app.config.get('DEFAULT_USER_ROLES', [])
            roles = [ self.appbuilder.sm.find_role(role_name) for role_name in default_roles ]

            user = self.appbuilder.sm.add_user(
                username, firstname, lastname, email, roles, 
                password=self._generate_random_string(32)
            )

        if user:
            login_user(user, remember=False)
            redirect_url = frequest.args.get('redirect')

            redirect_url = urlsafe_b64decode(redirect_url) if redirect_url else self.appbuilder.get_url_for_index

            return redirect(redirect_url.decode())

        return super(CustomAuthDBView,self).login()


    def _generate_random_string(self, length):
        charset = string.ascii_letters + string.digits + string.punctuation
        return "".join(random.choices(charset, k=length))


class CustomSecurityManager(SupersetSecurityManager):
    authdbview = CustomAuthDBView
