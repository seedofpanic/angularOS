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
    public createfile;
    public openModalToCreate;

    constructor($http, fileManagerService, modalService) {
        this.$http = $http;
        // let self = this;
        // let filePath = fileManagerService.getPath();
        // this.createnewfile = function () {
        // self.$http.get('http://localhost:3000/file/create?' +
        //         'name=' + filePath + '/' + self.name + '.txt&data=' + self.data)
        //     .then(function (res) {
        //         if (res.data.message === true) { // Заменить
        //             console.log('filePath: ' + filePath);
        //             self.name = '';
        //             self.data = '';
        //         } else {modalService.openModal('<div class="lolka">Не удалось создать файл</div>');
        //         }
        //     });

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

    //     this.createfile = function () {
    //         let self = this;
    //
    //         let filePath = fileManagerService.getPath();
    //
    //         let templateElement = angular.element(`<button ng-click="crDocument = false">&#216; Закрыть</button>
    // <div>Название файла</div>
    // <input type="text" ng-model="$ctrl.name" size="40" draggable="false"/><br>
    // <div>Содержимое</div>
    // <textarea type="text" ng-model="$ctrl.data" size="40" draggable="false"></textarea><br>
    // <button ng-click="$ctrl.create()">&#10003; Создать файл</button>`),
    //             scope = 'fileManagerScope';
    //
    //         modalService.openModal(templateElement);
    //     };
    }
}

export default angular
    .module('createDocumentModule', [
        fileManagerFactoryModule.name,
        modalsService.name
    ])
    .component('createDocument', component());


