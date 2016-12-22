'use strict';

const frameModule = require('../components/frame/frame.js');

// Service.$inject = ['desktopCtrl'];

/* @ngInject */
function Service() {
    this.openApp = function(appName) {
        this.closeAllApps();
        this.apps[appName] = true;
        return this.apps;
    }

    this.closeAllApps = function() {
        for (var app in this.apps) {
            app = false;
        }
        return this.apps;
    }

    this.closeApp = function(appName) {
        this.apps[appName] = false;
        return this.apps;
    }

    this.apps = {
        'Finder': false
    }
}

module.exports = angular
    .module('manageAppsModule', [])
    .service('manageAppsService', Service);
