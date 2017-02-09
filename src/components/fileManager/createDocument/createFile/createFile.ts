

import fileManagerFactoryModule from './../../fileManagerFactory';
import * as angular from 'angular';


const createFileTemplate = require ('./createFileTmpl.html');

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
    public create;
    public createfile;
    public clearInputBox;

    constructor($http, fileManagerService) {
        this.$http = $http;
        let self = this;
        this.create = function () {
            console.log('Скрипт прошел через createFile');
            fileManagerService.createfile(this.name, this.data);
            fileManagerService.get();
        };

        this.clearInputBox = function () {
            this.name = '';
            this.data = '';
        };
    };
}

export default angular
    .module('createFileModule', [
        fileManagerFactoryModule.name
    ])
    .component('createFile', component());