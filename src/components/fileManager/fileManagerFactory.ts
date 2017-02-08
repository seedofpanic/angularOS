import * as angular from 'angular';


function Service() {
    let folderPath;

    this.setPath = function (path) {

        folderPath = path;
    };

    this.getPath = function () {
        return folderPath;
    };
}


export default angular
    .module('fileManagerFactoryModule', [])
    .service('fileManagerService', Service);

