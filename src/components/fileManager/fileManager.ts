
import createDocumentModule from './createDocument/createDocument';
import createFolderModule from './createFolder/createFolder';
import fileManagerFactoryModule from './fileManagerFactory';
import * as angular from 'angular';


const fileManagerTemplate = require ('./fileManagerTemplate.html');

/* @ngInject */
function component() {
    let component = {
        template: fileManagerTemplate,
        controller: Controller,
        bindings: {

        }
    };

    return component;
}

class Controller {
    static $inject = ['$http', 'fileManagerService'];

    private path;
    private folderValue;
    $http;
    public get;
    public getUp;
    public getDown;
    public deleteFile;
    private pathSlashPos;
    public pathUp;
    private fileManagerService;
    public renameFile;


    constructor($http, fileManagerService) {
        let self = this;
        this.$http = $http;

        this.path = 'C:\\Users\\shemh\\Downloads';
        self.path === 'C:' ? self.path = 'C:\\' : true;
        self.path === 'D:' ? self.path = 'D:\\' : true;

        this.$http.get('http://localhost:3000/file/read?dir=' + self.path)
            .then(function (res) {
                self.folderValue = res.data;
            });

        this.get = function () {
            self.path === 'C:' ? self.path = 'C:\\' : true;
            self.path === 'D:' ? self.path = 'D:\\' : true;
            self.$http.get('http://localhost:3000/file/read?dir=' + self.path)
                .then(function (res) {
                    self.folderValue = res.data;
                    console.log(res);
                });
            fileManagerService.setPath(self.path);
            console.log('self.path: ' + self.path);
            console.log('fileManagerService.getPath: ' + fileManagerService.getPath());
        };

        this.getUp = function () {
            self.path = self.path + '';
            let a = self.path.lastIndexOf('\\'); // находим путь к предыдущей папке
            let b = self.path.lastIndexOf('/');
            a > b ? self.pathSlashPos = a : self.pathSlashPos = b;
            self.pathUp = self.path.slice(0, self.pathSlashPos);

            self.pathUp === 'C:' ? self.pathUp = 'C:\\' : true;
            self.pathUp === 'D:' ? self.pathUp = 'D:\\' : true;
            self.path = self.pathUp;

            console.log(self.pathUp);
            self.path = self.pathUp;
            self.$http.get('http://localhost:3000/file/read?dir=' + self.pathUp)
                .then(function (res) {
                    self.folderValue = res.data;
                    console.log(res);
                });
            fileManagerService.setPath(self.path);
        };

        this.getDown = function (file) {
            let self = this;
            this.$http = $http;

            self.$http.get('http://localhost:3000/file/read?dir=' + self.path + '/' + file)
                .then(function (res) {
                    self.folderValue = res.data;
                    console.log(res);
                });
            self.path = self.path + '\\' + file;
            fileManagerService.setPath(self.path);
        };

        this.renameFile = function (file) {
            let self = this;
            this.$http = $http;
            console.log('новые путь и имя: ' + self.path + '/' + self.newName);

            self.$http.get('http://localhost:3000/file/rename?' +
                'oldPath=' + self.path + '\\' + file + '&newPath=' + self.path + '\\' + self.newName)
                .then(function (res) {
                    self.get();
                });
            self.newName = '';

        };

        this.deleteFile = function (file) {
            let self = this;
            this.$http = $http;
            self.$http.get('http://localhost:3000/file/delete?name=' + self.path + '/' + file)
                .then(function (res) {
                    self.get ();
                });
        };
    }
}

export default angular
    .module('fileManagerModule', [
        createDocumentModule.name,
        fileManagerFactoryModule.name,
        createFolderModule.name
    ])
    .component('fileManager', component());
