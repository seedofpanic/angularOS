import * as angular from 'angular';

import fileManagerFactoryModule from './../../fileManagerFactory';
const createFileTemplate = require('./createFileTmpl.html');
import modalsService from './../../../modals/modalsService';

function component() {
    const component = {
        template: createFileTemplate,
        controller: Controller,
        bindings: {

        }
    };

    return component;
}

class Controller {
    static $inject = ['modalService', 'fileManagerService'];

    public create;

    constructor(modalService, fileManagerService) {
        this.create = function () {
            fileManagerService.create();
        };
    };

}

export default angular
    .module('createFileModule', [
        fileManagerFactoryModule.name,
        modalsService.name
    ])
    .component('createFile', component());
