import config from './app.config';

import * as angular from 'angular';
require('angular-ui-router');

import loginModule from './components/loginform/loginform';
import regModule from './components/regform/regform';
import frameModule from './components/frame/frame';
import authModule from './components/authorization/auth';
import serviceUser from './services/serviceUser';
import manageAppsModule from './services/manageApps';

import modalsModule from './components/modals/modals';

require('./page.css');

(function() {
    'use strict';

    angular
        .module('osApp', [
            'ui.router',
            loginModule.name,
            regModule.name,
            authModule.name,
            frameModule.name,
            serviceUser.name,
            manageAppsModule.name,
            modalsModule.name
        ])
        .config(config);
})();
