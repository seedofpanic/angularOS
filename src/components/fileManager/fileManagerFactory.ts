import * as angular from 'angular';


export class Service {
    static $inject = ['$http', 'modalService'];
    $http;
    modalService;
    public path; // Путь, который отображается в адресной строке
    public folderValue; // Содержимое папки, которое выводится на экран. Разделено на .folders и .files
    public fileData;

    constructor($http, modalService) {
        this.$http = $http;
        this.modalService = modalService;
        this.folderValue = {};

        this.path = 'C:\\Users\\shemh\\Downloads';
        this.path = this.fixPath(this.path);

        this.get(this.path);
    }

    get(path) {
        if (path === undefined || path === '') {
            path = this.path;
        }
        path = this.fixPath(path);
        this.path = path;
        console.log('path из сервиса при get: ' + path);
        this.$http.get('http://localhost:3000/folder/read?dir=' + path)
            .then((res) => {

                // мутация для обновления списка данных в области папки
                this.folderValue.folders = res.data.folders;
                this.folderValue.files = res.data.files;

                // мутация закончена

            });
        console.log('Область папки обновилась: ' + path);
    }; // Функция обновления области вывода содержимого папки

    fixPath(path) {
        path === 'C:' ? path = 'C:\\' : true;
        path === 'C' ? path = 'C:\\' : true;
        path === 'D:' ? path = 'D:\\' : true;
        path === 'D' ? path = 'D:\\' : true;
        path = path.replace(/\\\\/g, '\\');
        return path;
    }; // Исправление пути для избежания перехода на 'С:' и т.п.

    createFile(name, data) {
        console.log('Новый файл:\nАдрес: ' + this.path + '\nname: ', name, ', data: ', data);
        this.$http.get('http://localhost:3000/file/create?' +
            'name=' + this.path + '/' + name + '.txt&data=' + data)
            .then((res) => {
                if (res.data.message === true) {
                    console.log('Создан новый файл с адресом ' + this.path + '/' + name);
                } else {
                    this.modalService.openModal('<div><div>Не удалось создать файл.</div>' +
                        '<div>Проверьте наличие прав на изменение файлов в папке.</div>' +
                        '<div>Также запрещены в названии файла следующие символы:</div>' +
                        '<div>\\, /, :, *, ?, ", <, >, |, +</div></div>');
                }
            });
    }; // Функция создания файла

    renameFile(file, path, newName) {
        let dotPos = file.lastIndexOf('.');
        let extension = '';
        if (dotPos !== -1) {
            extension = file.slice(dotPos);
        }
        newName = newName + extension;

        console.log('новые путь и имя: ' + path + '/' + newName);

        this.$http.get('http://localhost:3000/file/rename?' +
            'oldPath=' + path + '\\' + file + '&newPath=' + path + '\\' + newName)
            .then((res) => {
                this.get(path);
            });
    }; // Функция переименования файла

    deleteFile(file, path) {
        console.log('path из сервиса перед удалением: ' + path);
        this.$http.get('http://localhost:3000/file/delete?name=' + path + '/' + file)
            .then((res) => {
                this.get(path);
                console.log('path из сервиса при удалении: ' + path);
            });
    }; // Функция удаления файла

    getUpFolderAddress(currentAddress) {
        currentAddress = currentAddress + '';
        let a = currentAddress.lastIndexOf('\\'); // находим путь к предыдущей папке
        let b = currentAddress.lastIndexOf('/');
        let c;
        a > b ? c = a : c = b;
        let pathUpAddress = currentAddress.slice(0, c);
        pathUpAddress = this.fixPath(pathUpAddress);
        return pathUpAddress;
    }; // Функция получения адреса верхней папки

    readFile (file) {
        this.$http.get('http://localhost:3000/file/read?file=' + file)
            .then((res) => {
                this.fileData = res.data;
            });
        return this.fileData;
    };

}


export default angular
    .module('fileManagerFactoryModule', [])
    .service('fileManagerService', Service);

