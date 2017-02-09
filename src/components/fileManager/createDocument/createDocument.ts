import * as angular from 'angular';

import fileManagerFactoryModule from './../fileManagerFactory';
const createDocumentTemplate = require('./createDocumentTmpl.html');
import modalsService from './../../modals/modalsService';
import createFileModule from './createFile/createFile';

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
    static $inject = ['$http', 'fileManagerService', 'modalService'];
    $http;
    public create;
    public createfile;

    constructor($http, fileManagerService, modalService, createFile) {
        this.$http = $http;

        this.createfile = function () { // Этот метод будет запускаться через внутренний компонент createFile
            console.log('кнопка открытия модального окна для создания файла нажата');
            modalService.openModal('<create-file></create-file>');
        };
    }
}

export default angular
    .module('createDocumentModule', [
        fileManagerFactoryModule.name,
        modalsService.name,
        createFileModule.name
    ])
    .component('createDocument', component());


