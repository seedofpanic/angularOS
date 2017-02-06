import * as angular from 'angular';

import fileManagerFactoryModule from './../fileManagerFactory';
const createDocumentTemplate = require('./createFolderTmpl.html');
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
    static $inject = ['$http', 'fileManagerService', 'modalService'];
    $http;
    $rootScope;
    public fileManagerService;
    public create;

    constructor($http, fileManagerService, modalService) {
        this.$http = $http;
        this.create = function () {
            let self = this;
            self.$http.get('http://localhost:3000/dir/create?' +
                'newdir=' + fileManagerService.getPath() + '/' + self.newdir)
                .then(function (res) {
                    alert(res.data.message);
                    console.log(fileManagerService.getPath());
                    self.newdir = '';
                });
        };
    }
}

export default angular
    .module('createFolderModule', [
        fileManagerFactoryModule.name
    ])
    .component('createFolder', component());

