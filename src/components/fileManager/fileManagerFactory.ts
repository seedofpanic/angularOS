import * as angular from 'angular';
import modalsService from './../modals/modalsService';


function Service() {
    let folderPath;

    this.setPath = function (path) {

        folderPath = path;
    };

    this.getPath = function () {
        return folderPath;
    };

    this.create = function (name, data) {
        let modalService = this.modalService;
        let self = this;
        self.name = name;
        self.data = data;
        let filePath = self.getPath();
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


export default angular
    .module('fileManagerFactoryModule', [])
    .service('fileManagerService', Service);

