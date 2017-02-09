import * as angular from 'angular';



export class Service {
    static $inject = ['$http', 'modalService'];
    $http;
    public folderPath;
    public setPath;
    public getPath;
    public createfile;
    public renewFolderContent;
    public path;
    public folderValue;
    public get;

    constructor($http, modalService) {
        let self = this;
        this.$http = $http;

        this.path = 'C:\\Users\\shemh\\Downloads';
        self.path === 'C:' ? self.path = 'C:\\' : true;
        self.path === 'D:' ? self.path = 'D:\\' : true;

        this.$http.get('http://localhost:3000/file/read?dir=' + self.path)
            .then(function (res) {
                self.folderValue = res.data;
            });

        this.get = function (path) {
            if (path === undefined) {
                path = self.path;
            }
            self.setPath(path);
            self.path = path;
            path === 'C:' ? path = 'C:\\' : true;
            path === 'D:' ? path = 'D:\\' : true;
            console.log('path из сервиса: ' + path);
            self.$http.get('http://localhost:3000/file/read?dir=' + path)
                .then(function (res) {
                    // мутация для обновления списка данных в области папки
                    self.folderValue.length = 0;
                    console.log('folderValue в сервисе очищен: ' + self.folderValue);
                    let i = 0;
                    while (res.data[i]) {
                        self.folderValue[i] = res.data[i];
                        i++;
                    }
                    console.log('folderValue в сервисе заполнен: ' + self.folderValue);
                    // мутация закончена

                });
            console.log('Область папки обновилось: ' + path);
        };

        this.setPath = function (path) {
            this.folderPath = path;
        };

        this.getPath = function () {
            return this.folderPath;
        };

        this.createfile = function (name, data) {
            this.$http = $http;
            let filePath = this.getPath();
            console.log('Новый файл:\n' + 'name: ', name, ', data: ', data);
            let self = this;
            self.name = name;
            self.data = data;
            self.$http.get('http://localhost:3000/file/create?' +
                'name=' + filePath + '/' + self.name + '.txt&data=' + self.data)
                .then(function (res) {
                    if (res.data.message === true) {
                        console.log('Создан новый файл с адресом ' + filePath);
                    } else {modalService.openModal('<div class="lolka">Не удалось создать файл</div>');
                      }
                });
        };

        this.renewFolderContent = function () {
           console.log('kek');
        };
    }
}

/*
function Service() {

    let folderPath;
    let $http;

    this.setPath = function (path) {
        folderPath = path;
    };

    this.getPath = function () {
        return folderPath;
    };

    this.createfile = function (name, data) {
        this.$http = $http;
        let filePath = this.getPath();
        console.log('Новый файл:\n' + 'name: ', name, ', data: ', data);
        let self = this;
        self.$http.get('http://localhost:3000/file/create?' +
            'name=' + filePath + '/' + self.name + '.txt&data=' + self.data)
            .then(function (res) {
                if (res.data.message === true) {
                    console.log('filePath: ' + filePath);
                    self.name = '';
                    self.data = '';
                }// else {modalService.openModal('<div class="lolka">Не удалось создать файл</div>');
                // }
            });
    };
}
*/

export default angular
    .module('fileManagerFactoryModule', [])
    .service('fileManagerService', Service);

