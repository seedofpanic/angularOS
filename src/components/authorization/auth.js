'use strict';

require('./auth.scss');
const authTemplate = require('./auth.html');

function authorization() {
    const component = {
        bindings: {
            
        },
        template: authTemplate,
        controller: authCtrl,
        controllerAs: 'authCtrl'
    };

    return component;
}

function authCtrl() {
}

module.exports = angular
    .module('authModule', [])
    .component('authorization', authorization());
