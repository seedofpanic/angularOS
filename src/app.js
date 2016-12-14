var angular = require("angular");
import config from "./app.config.js";
require('angular-ui-router');
const loginModule = require('./components/loginform/loginform.js');
const regModule = require('./components/regform/regform.js');

require("./page.css");

(function() {
    'use strict';

    angular
        .module('osApp', [
            'ui.router',
            'loginModule',
            'regModule',
        ])
        .config(config);
})();
