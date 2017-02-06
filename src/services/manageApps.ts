import * as angular from 'angular';

/* @ngInject */
function Service() {
    this.openApp = function(appName) {
        this.closeAllApps();
        this.apps[appName] = true;
        return this.apps;
    };

    this.closeAllApps = function() {
        for (let app in this.apps) {
            app = 'false';
        }
        return this.apps;
    };

    this.closeApp = function(appName) {
        this.apps[appName] = false;
        return this.apps;
    };

    this.apps = {
        'Finder': false,
    };
}

export default angular
    .module('manageAppsModule', [])
    .service('manageAppsService', Service);
