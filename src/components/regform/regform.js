'use strict';

require('./regform.scss');
const regTemplate = require('./registration.html');
const serviceModule = require('../../services/serviceUser.js');
const comparePassModule = require('./compareDirective.js');

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

registrationCtrl.$inject = ['serveUser'];

function registrationCtrl(serveUser) {

    this.sendUserRegistration = () => {
        if (this.firstPassword == this.secondPassword) {
            serveUser.register(this.login, this.firstPassword);
        } else {
            console.log('Sorry passwords not indent');
        }
    }
}

module.exports = angular
    .module('regModule', [
        serviceModule.name,
        comparePassModule.name
    ])
    .component('registrationForm', registration());
