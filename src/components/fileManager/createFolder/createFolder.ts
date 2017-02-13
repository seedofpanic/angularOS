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
                'newdir=' + fileManagerService.path + '/' + self.newdir)
                .then(function (res) {
                    if (res.data.message === true) { // Заменить
                        modalService.openModal('<div class="lolka">Папка создана</div>');
                    console.log(fileManagerService.path);
                    self.newdir = '';
                    } else {modalService.openModal('<div class="lolka">Не удалось создать папку</div>');
                    }
                });
        };
    }
}

export default angular
    .module('createFolderModule', [
        fileManagerFactoryModule.name
    ])
    .component('createFolder', component());


