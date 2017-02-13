import * as angular from 'angular';

import fileManagerFactoryModule from './../fileManagerFactory';
const createDocumentTemplate = require('./createFileTempl.html');
import modalsService from './../../modals/modalsService';
import createDocumentModule from './createDocumentFolder/createDocument';

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
    public fileManagerService;
    public modalService;
    public createDocument;

    constructor($http, fileManagerService, modalService, createDocument) {
        this.$http = $http;
        this.fileManagerService = fileManagerService;
        this.modalService = modalService;
        this.createDocument = createDocument;

        this.createfile = function () { // Этот метод будет запускаться через внутренний компонент createDocumentFolder
            console.log('кнопка открытия модального окна для создания файла нажата');
            modalService.openModal('<create-document></create-document>');
        };
    }
}

export default angular
    .module('createFileModule', [
        fileManagerFactoryModule.name,
        modalsService.name,
        createDocumentModule.name
    ])
    .component('createFile', component());


