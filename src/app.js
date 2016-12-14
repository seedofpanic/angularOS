var angular = require("angular");
require('angular-ui-router');
import config from "./app.config.js";

require("./page.css");

(function() {
    'use strict';

    angular
        .module('osApp', [
            'ui.router'
        ])
        .config(config);
})();

require('./components/loginform/loginformCtrl.js');
require('./components/regform/regformCtrl.js');
