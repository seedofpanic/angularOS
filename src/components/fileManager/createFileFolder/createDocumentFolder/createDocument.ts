

import fileManagerFactoryModule from './../../fileManagerFactory';
import * as angular from 'angular';

const createFileTemplate = require ('./createDocumentTempl.html');

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
    static $inject = ['$http', 'fileManagerService'];
    $http;
    public name;
    public data;
    public fileManagerService;

    constructor($http, fileManagerService) {
        this.$http = $http;
        this.fileManagerService = fileManagerService;

    };

    create() {
    console.log('Скрипт прошел через компонент createDocumentFolder');
    this.fileManagerService.createFile(this.name, this.data);
    this.fileManagerService.get();
};

    clearInputBox() {
    this.name = '';
    this.data = '';
};
}

export default angular
    .module('createDocumentModule', [
        fileManagerFactoryModule.name
    ])
    .component('createDocument', component());