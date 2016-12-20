const angular = require("angular");
import config from "./app.config.js";
require('angular-ui-router');
const loginModule = require('./components/loginform/loginform.js');
const regModule = require('./components/regform/regform.js');
const frameModule = require('./components/frame/frame.js');
const authModule = require('./components/authorization/auth.js');
const serviceUser = require('./services/serviceUser.js');

require("./page.css");

(function() {
    'use strict';

    angular
        .module('osApp', [
            'ui.router',
            loginModule.name,
            regModule.name,
            authModule.name,
            frameModule.name,
            serviceUser.name
        ])
        .config(config);
})();
