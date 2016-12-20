'use strict';

require('./frame.scss');
const frameTemplate = require('./frame.html');
const serviceUser = require('../../services/serviceUser.js');

/* @ngInject */
function component() {
    var component = {
        template: frameTemplate,
        controller: Controller,
        controllerAs: 'desktopCtrl',
        bindings: {
            userId: '<'
        }
    };

    return component;
}

Controller.$inject = ['serveUser'];

/* @ngInject */
function Controller(serveUser) {
    this.userLogOut = function() {
        serveUser.logout();
    }
}

module.exports = angular
    .module('frameModule', [
        serviceUser.name
    ])
    .component('osFrame', component());
