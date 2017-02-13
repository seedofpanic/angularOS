
import createFileModule from './createFileFolder/createFile';
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
    static $inject = ['fileManagerService'];

    private path; // Путь, который отображается в адресной строке
    public folderValue; // Содержимое папки, которое выводится на экран. Разделено на .folders и .files
    public newName; // Новое имя файла, указываемое при переименовании


    constructor(private fileManagerService) {
        this.path = fileManagerService.path;
        this.folderValue = fileManagerService.folderValue;
    }

    getUp() {
        let pathUpAddress = this.fileManagerService.getUpFolderAddress(this.path);
        this.fileManagerService.get(pathUpAddress);
        console.log('Перешли к верхней папке: ' + pathUpAddress);
        this.path = pathUpAddress;
    };

    get() {
        console.log('\n\n\n\nСодержимое папки на момент начала выполнения обновления: \n' + this.folderValue);
        this.path = this.fileManagerService.fixPath(this.path);
        console.log('path из конструктора: ' + this.path);
        this.fileManagerService.get(this.path);
    };

    getDown(file) {
        let downPathAddress = this.path + '\\' + file;
        downPathAddress = this.fileManagerService.fixPath(downPathAddress);
        this.fileManagerService.get(downPathAddress);
        this.path = downPathAddress;
    };

    renameFile(file) {
        this.fileManagerService.renameFile(file, this.path, this.newName);
        this.newName = '';
    };

    renameFolder(file) {
        this.fileManagerService.renameFile(file, this.path, this.newName);
        this.newName = '';
    };

    deleteFile(file) {
        this.fileManagerService.deleteFile(file, this.path);
    };

    ping() {
        console.log('folderValue в конструкторе: \n' + this.folderValue.folder + ',' + this.folderValue.files);
    };
}

export default angular
    .module('fileManagerModule', [
        createFileModule.name,
        fileManagerFactoryModule.name,
        createFolderModule.name
    ])
    .component('fileManager', component());
