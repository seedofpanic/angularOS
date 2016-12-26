const appWrapperTemplate = require('./appWrapper.html');
import * as angular from "angular";
require('./appWrapper.scss');

import fileManagerModule from '../fileManager/fileManager';

import manageAppsModule from '../../services/manageApps';

/* @ngInject */
function component() {
    const component = {
        template: appWrapperTemplate,
        controller: Controller,
        bindings: {
            appName: '<',
            close: '&'
        }
    };

    return component;
}

/* @ngInject */
class Controller {

}

export default angular
    .module('appWrapperModule', [
        fileManagerModule.name,
        manageAppsModule.name,
    ])
    .component('appWrapper', component());
