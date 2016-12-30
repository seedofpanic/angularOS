import * as angular from "angular";

require('./frame.scss');
const frameTemplate = require('./frame.html');

import serviceUser from '../../services/serviceUser';
import manageAppsModule from "../../services/manageApps";

import appWrapper from '../appWrapper/appWrapper';
import clockModule from '../clock/clock';


/* @ngInject */
function component() {
    var component = {
        template: frameTemplate,
        controller: Controller,
        bindings: {
            userId: '<',
            apps: '<'
        }
    };

    return component;
}

class Controller {

    private apps;
    private serveUser;
    private manageAppsService;
    private appIsActive;
    private isMenuOpened: boolean;

    static $inject = ['serveUser', 'manageAppsService'];

    constructor(serveUser, manageAppsService) {
        this.apps = {};
        this.serveUser = serveUser;
        this.manageAppsService = manageAppsService;
        this.appIsActive = false;
    }

    public closeAllApps() {
        this.apps = this.manageAppsService.closeAllApps();
        this.appIsActive = false;
    }

    public userLogOut() {
        this.serveUser.logout();
    }

    public openApp(appName) {
        this.apps = this.manageAppsService.openApp(appName);
        this.appIsActive = appName;
        this.isMenuOpened = false;
    }
}

export default angular
    .module('frameModule', [
        serviceUser.name,
        manageAppsModule.name,
        appWrapper.name,
        clockModule.name
    ])
    .component('osFrame', component());
