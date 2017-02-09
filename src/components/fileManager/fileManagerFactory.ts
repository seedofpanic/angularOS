import * as angular from 'angular';


export class Service {
    static $inject = ['$http'];
    $http;
    public folderPath;
    public setPath;
    public getPath;
    public createfile;

    constructor($http) {
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
                        console.log('filePath: ' + filePath);
                    }// else {modalService.openModal('<div class="lolka">Не удалось создать файл</div>');
                     // }
                });
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

