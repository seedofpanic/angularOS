'use strict';

const appWrapperTemplate = require('./appWrapper.html');
require('./appWrapper.scss');

const fileManagerModule = require('../fileManager/fileManager.js');

const manageAppsModule = require('../../services/manageApps.js');

/* @ngInject */
function component() {
    var component = {
        template: appWrapperTemplate,
        controller: Controller,
        controllerAs: 'appWrapperCtrl',
        bindings: {
            appName: '<',
            closeFunc: '&'
        }
    };

    return component;
}

// Controller.$inject = ['manageAppsService'];

/* @ngInject */
function Controller() {

}

module.exports = angular
    .module('appWrapperModule', [
        fileManagerModule.name,
        manageAppsModule.name,
    ])
    .component('appWrapper', component());
