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

    this.appIsActive = false;

    this.userLogOut = () => {
        serveUser.logout();
    }

    this.openApp = (appName) => {
        this.apps = manageAppsService.openApp(appName);
        this.appIsActive = appName;
    }

    this.closeAllApps = () => {
        this.apps = manageAppsService.closeAllApps();
        this.appIsActive = false;
    }
}

module.exports = angular
    .module('frameModule', [
        serviceUser.name,
        manageAppsModule.name,
        appWrapper.name
    ])
    .component('osFrame', component());
