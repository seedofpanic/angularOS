import * as angular from 'angular';

import fileManagerFactoryModule from './../fileManagerFactory';
const createDocumentTemplate = require('./createDocumentTmpl.html');

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
    static $inject = ['$http', 'fileManagerService'];
    $http;
    $rootScope;
    public fileManagerService;
    public create;

    constructor($http, fileManagerService) {
        this.$http = $http;
        this.create = function () {
            let self = this;
            self.$http.get('http://localhost:3000/file/create?' +
                'name=' + fileManagerService.getPath() + '/' + self.name + '.txt&data=' + self.data)
                .then(function (res) {
                    alert(res.data.message);
                    console.log(fileManagerService.getPath());
                });
        };
    }
}

export default angular
    .module('createDocumentModule', [
        fileManagerFactoryModule.name
    ])
    .component('createDocument', component());


