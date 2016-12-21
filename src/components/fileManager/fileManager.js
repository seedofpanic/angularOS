'use strict';

const fileManagerTemplate = require('./fileManager.html');
require('./fileManager.scss');

const fsModule = require('../../services/fsService.js');

/* @ngInject */
function component() {
    var component = {
        template: fileManagerTemplate,
        controller: Controller,
        controllerAs: 'fileManagerCtrl',
        bindings: {
            fs: '<'
        }
    };

    return component;
}

Controller.$inject = ['fsService'];

/* @ngInject */
function Controller(fsService) {
    this.fs = fsService.getFs();

    this.isValueChanged = false;
    this.path = [this.fs];
    this.folderValue = this.path[0];

    this.showTreeElem = (value, key) => {
        this.isValueChanged = true;
        this.folderValue = value;
        this.path = [this.path[0], value];
        this.isValueChanged = false;
        // console.log(this.path);
    }

    this.showFolderElem = (value, key) => {
        this.isValueChanged = true;
        this.folderValue = value;
        this.path.push(value);
        this.isValueChanged = false;
        // console.log(this.path);
    }

    this.goBack = () => {
        if (this.path.length > 1) {
            this.isValueChanged = true;
            this.path.pop();
            this.folderValue = this.path[this.path.length-1];
            this.isValueChanged = false;
        }
        // console.log(this.path);
    }

    this.addFolder = () => {
        this.folderValue[Object.keys(this.folderValue).length] = {};
    }

    this.addFile = () => {

    }

    this.removeFolder = () => {

    }

    this.removeFile = () => {

    }

}

module.exports = angular
    .module('fileManagerModule', [
        fsModule.name
    ])
    .component('fileManager', component());
