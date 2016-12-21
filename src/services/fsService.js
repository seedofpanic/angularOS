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

        this.addFolder = function(currentPath) {

        }

        this.removeFolder = function(folderName) {

        }

        this.addFile = function(currentPath) {

        }

        this.removeFile = function(fileName) {

        }

        this.getFs = function() {
            return fs;
        }
}

module.exports = angular
    .module('fsModule', [])
    .service('fsService', Service);
