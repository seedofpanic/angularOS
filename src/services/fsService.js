'use strict';

// Service.$inject = ['dependencies'];

/* @ngInject */
function Service() {
        const fs = {
            '/': {
                'home': {

                },
                'images': {
                    kartinka: 'loool',
                    daun: {
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
            currentPath[Object.keys(currentPath).length] = {};
            return currentPath;
        }

        this.removeItem = function(currentPath, itemName) {
            delete currentPath[itemName];
            return currentPath;
        }

        this.addFile = function(currentPath, fileName) {
            currentPath[Object.keys(currentPath).length + '.file'] = '';
            return currentPath;
        }

        this.getFs = function() {
            return fs;
        }
}

module.exports = angular
    .module('fsModule', [])
    .service('fsService', Service);
