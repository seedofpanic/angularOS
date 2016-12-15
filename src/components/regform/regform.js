'use strict';

require('./regform.scss');
const regTemplate = require('./registration.html');
const serviceModule = require('../../services/serviceUser.js');

function registration() {
    const component = {
        bindings: {
            login: '<',
            firstPassword: '<',
            secondPassword: '<'
        },
        template: regTemplate,
        controller: registrationCtrl,
        controllerAs: 'regCtrl'
    };

    return component;
}

function registrationCtrl(serveUser) {

    this.sendUserRegistration = () => {
        if (this.firstPassword == this.secondPassword) {
            console.log('registered: ' + this.login + ' 1: ' + this.firstPassword + " 2: " + this.secondPassword);
            serveUser.register(this.login, this.firstPassword);
        } else {
            console.log('Sorry passwords not indent');
        }
    }
}

module.exports = angular
    .module('regModule', [
        'serviceModule'
    ])
    .component('registrationForm', registration());
