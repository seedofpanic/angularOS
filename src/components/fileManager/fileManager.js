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

    this.selectedItem = {
        key: '',
        value: ''
    }

    this.selectItem = (key, value) => {
        this.selectedItem.key = key;
        this.selectedItem.value = value;
    }

    this.clearSelectedItem = () => {
        this.selectedItem.key = '';
        this.selectedItem.value = '';
    }

    this.showTreeElem = (value, key) => {
        this.folderValue = value;
        this.path = [this.path[0], value];
        this.clearSelectedItem();
    }

    this.showFolderElem = (value, key) => {
        this.folderValue = value;
        this.path.push(value);
        this.clearSelectedItem();
    }

    this.goBack = () => {
        if (this.path.length > 1) {
            this.path.pop();
            this.folderValue = this.path[this.path.length-1];
            this.clearSelectedItem();
        }
    }

    this.addFolder = () => {
        this.folderValue = fsService.addFolder(this.folderValue);
        this.clearSelectedItem();
    }

    this.addFile = () => {
        this.folderValue = fsService.addFile(this.folderValue);
        this.clearSelectedItem();
    }

    this.removeItem = () => {
        this.folderValue = fsService.removeItem(this.folderValue, this.selectedItem.key)
        this.clearSelectedItem();
    }

}

module.exports = angular
    .module('fileManagerModule', [
        fsModule.name
    ])
    .component('fileManager', component());
