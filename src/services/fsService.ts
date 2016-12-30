import * as angular from "angular";

/* @ngInject */
function Service() {
        let fs = {
            '/': {
                'home': {

                },
                'images': {
                    text: 'loool',
                    hehheh: {
                        dcp: 'dcp'
                    }
                },
                videos: {

                },
                'user': {
                    duke: {

                    },

                    artyom: {

                    }
                }
            }
        }

        this.addFolder = function(currentPath, folderName) {
            currentPath['new folder' + Object.keys(currentPath).length] = {};
            this.updateFs();
            return currentPath;
        }

        this.removeItem = function(currentPath, itemName) {
            delete currentPath[itemName];
            this.updateFs();
            return currentPath;
        }

        this.addFile = function(currentPath, fileName) {
            currentPath[Object.keys(currentPath).length + '.file'] = '';
            this.updateFs();
            return currentPath;
        }

        this.getFs = function() {
            this.initFs();
            return fs;
        }

        this.updateFs = function() {
            localStorage.setItem('fs', JSON.stringify(fs));
        }

        this.initFs = function() {
            if (localStorage.getItem('fs')) {
                fs = JSON.parse(localStorage.getItem('fs'));
            } else {
                localStorage.setItem('fs', JSON.stringify(fs));
            }
        }
}

export default angular
    .module('fsModule', [])
    .service('fsService', Service);
