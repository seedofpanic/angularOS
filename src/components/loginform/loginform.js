'use strict';

require('./loginform.css');
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

function loginCtrl(serveUser) {

    this.sendUserLogin = () => {
        console.log('loged in: ' + this.login + ' + ' + this.password);
        // serveUser.login(this.login, this.password);
    }
}

module.exports = angular
    .module('loginModule', [
        'serviceModule'
    ])
    .component('loginForm', login());
