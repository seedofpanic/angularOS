'use strict';

require('./loginform.scss');
const loginTemplate = require('./login.html');
const serviceModule = require('../../services/serviceUser.js');

function login() {
    const component = {
        bindings: {
            login: '<',
            password: '<'
        },
        template: loginTemplate,
        controller: loginCtrl,
        controllerAs: 'loginCtrl'
    };

    return component;
}

loginCtrl.$inject = ['serveUser'];

function loginCtrl(serveUser) {

    this.sendUserLogin = () => {
        serveUser.login(this.login, this.password);
    }
}

module.exports = angular
    .module('loginModule', [
        'serviceModule'
    ])
    .component('loginForm', login());
