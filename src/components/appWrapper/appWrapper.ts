const appWrapperTemplate = require('./appWrapper.html');
import * as angular from "angular";
require('./appWrapper.scss');

import fileManagerModule from '../fileManager/fileManager';

import manageAppsModule from '../../services/manageApps';
import draggableModule from './draggable';

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
        draggableModule.name
    ])
    .component('appWrapper', component());
