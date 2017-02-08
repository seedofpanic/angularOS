import * as angular from 'angular';

import fileManagerFactoryModule from './../fileManagerFactory';
const createDocumentTemplate = require('./createDocumentTmpl.html');
import modalsService from './../../modals/modalsService';

function component() {
    const component = {
        template: createDocumentTemplate,
        controller: Controller,
        bindings: {

        }
    };

    return component;
}

class Controller {
    static $inject = ['fileManagerService', 'modalService'];

    public create;
    public createfile;

    constructor(fileManagerService, modalService) {

        this.create = function () {
            fileManagerService.create();
        };

        this.createfile = function () {
            let self = this;

            modalService.openModal('<create-file></create-file>', this.data);
        };
    }
}

export default angular
    .module('createDocumentModule', [
        fileManagerFactoryModule.name,
        modalsService.name
    ])
    .component('createDocument', component());
