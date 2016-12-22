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

    this.fsService = fsService;

    this.fs = fsService.getFs();

    this.isValueChanged = false;
    this.path = [this.fs];

    this.folderValue = this.path[0];

    this.selectedItem = {
        key: '',
        value: ''
    }
}

Controller.prototype.selectItem = function(key, value) {
    this.selectedItem.key = key;
    this.selectedItem.value = value;
}

Controller.prototype.clearSelectedItem = function() {
    this.selectedItem.key = '';
    this.selectedItem.value = '';
}

Controller.prototype.showTreeElem = function(value, key) {
    this.folderValue = value;
    this.path = [this.path[0], value];
    this.clearSelectedItem();
}

Controller.prototype.showFolderElem = function(value, key) {
    this.folderValue = value;
    this.path.push(value);
    this.clearSelectedItem();
}

Controller.prototype.goBack = function() {
    if (this.path.length > 1) {
        this.path.pop();
        this.folderValue = this.path[this.path.length-1];
        this.clearSelectedItem();
    }
}

Controller.prototype.addFolder = function(fsService) {
    this.folderValue = this.fsService.addFolder(this.folderValue);
    this.clearSelectedItem();
}

Controller.prototype.addFile = function(fsService) {
    this.folderValue = this.fsService.addFile(this.folderValue);
    this.clearSelectedItem();
}

Controller.prototype.removeItem = function(fsService) {
    this.folderValue = this.fsService.removeItem(this.folderValue, this.selectedItem.key)
    this.clearSelectedItem();
}

module.exports = angular
    .module('fileManagerModule', [
        fsModule.name
    ])
    .component('fileManager', component());
