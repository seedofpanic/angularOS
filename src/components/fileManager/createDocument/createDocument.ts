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
    static $inject = ['$http', 'fileManagerService', 'modalService'];
    $http;
    $rootScope;
    public fileManagerService;
    public create;

    constructor($http, fileManagerService, modalService) {
        this.$http = $http;
        this.create = function () {
            let self = this;
            let filePath = fileManagerService.getPath();
            self.$http.get('http://localhost:3000/file/create?' +
                'name=' + filePath + '/' + self.name + '.txt&data=' + self.data)
                .then(function (res) {
                    if (res.data.message === true) { // Заменить
                        console.log('filePath: ' + filePath);
                        self.name = '';
                        self.data = '';
                    } else {modalService.openModal('<div class="lolka">Не удалось создать файл</div>');
                    }
                });
        };
    }
}

export default angular
    .module('createDocumentModule', [
        fileManagerFactoryModule.name,
        modalsService.name
    ])
    .component('createDocument', component());


