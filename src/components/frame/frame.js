'use strict';

require('./frame.scss');
const frameTemplate = require('./frame.html');

const serviceUser = require('../../services/serviceUser.js');
const manageAppsModule = require("../../services/manageApps.js");

const appWrapper = require('../appWrapper/appWrapper.js');


/* @ngInject */
function component() {
    var component = {
        template: frameTemplate,
        controller: Controller,
        controllerAs: 'desktopCtrl',
        bindings: {
            userId: '<',
            apps: '<'
        }
    };

    return component;
}

Controller.$inject = ['serveUser', 'manageAppsService'];

/* @ngInject */
function Controller(serveUser, manageAppsService) {
    this.apps = {}

    this.serveUser = serveUser;
    this.manageAppsService = manageAppsService;

    this.appIsActive = false;
}

Controller.prototype.closeAllApps = function() {
    this.apps = this.manageAppsService.closeAllApps();
    this.appIsActive = false;
}

Controller.prototype.userLogOut = function() {
    this.serveUser.logout();
}

Controller.prototype.openApp = function(appName) {
    this.apps = this.manageAppsService.openApp(appName);
    this.appIsActive = appName;
    this.isMenuOpened = false;
}

module.exports = angular
    .module('frameModule', [
        serviceUser.name,
        manageAppsModule.name,
        appWrapper.name
    ])
    .component('osFrame', component());
