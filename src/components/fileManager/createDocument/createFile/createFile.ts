

import fileManagerFactoryModule from './../../fileManagerFactory';
import modalsService from './../../../modals/modalsService';
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
    static $inject = ['$http', 'fileManagerService', 'modalService'];
    $http;
    public create;
    public createfile;

    constructor($http, fileManagerService, modalService) {
        this.$http = $http;
        this.create = function () {
            console.log('Скрипт прошел через createFile');
            fileManagerService.createfile(this.name, this.data);
            this.name = '';
            this.data = '';
        };
    };
}

export default angular
    .module('createFileModule', [
        fileManagerFactoryModule.name,
        modalsService.name
    ])
    .component('createFile', component());