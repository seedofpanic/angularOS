'use strict';

const frameModule = require('../components/frame/frame.js');

// Service.$inject = ['desktopCtrl'];

/* @ngInject */
function Service() {

    const service = {
        openApp: function(appName) {
            this.closeAllApps();
            this.apps[appName] = true;
            return this.apps;
        },

        closeAllApps: function() {
            for (var app in this.apps) {
                app = false;
            }
            return this.apps;
        },

        closeApp: function(appName) {
            this.apps[appName] = false;
            return this.apps;
        },

        apps: {
            'Finder': false
        }
    }

    return service;
}

module.exports = angular
    .module('manageAppsModule', [])
    .service('manageAppsService', Service);
