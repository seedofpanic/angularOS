import * as angular from 'angular';

const fileManagerTemplate = require('./fileManager.html');
require('./fileManager.scss');

import fsModule from '../../services/fsService';

/* @ngInject */
function component() {
    let component = {
        template: fileManagerTemplate,
        controller: Controller,
        bindings: {
            fs: '<'
        }
    };

    return component;
}

class Controller {
    static $inject = ['fsService'];

    private fs: any;
    private fsService;
    private isValueChanged: boolean;
    private path: any[];
    private folderValue;
    private selectedItem;
    private favourites;

    constructor(fsService) {
        this.fsService = fsService;
        this.fs = fsService.getFs();
        this.isValueChanged = false;
        this.path = [this.fs];
        this.folderValue = this.path[0];
        this.favourites = this.fs['/'];
        this.selectedItem = {
            key: '',
            value: '',
            target: ''
        };
    }

    public selectItem(key, value, $event) {
        this.clearSelectedItem();
        this.selectedItem.key = key;
        this.selectedItem.value = value;
        this.selectedItem.target = $event.target;
        this.selectedItem.target.style.color = '#f00';
    }

    public clearSelectedItem() {
        if (this.selectedItem.target !== '') {
            this.selectedItem.key = '';
            this.selectedItem.value = '';
            this.selectedItem.target.style.color = '#000';
            this.selectedItem.target = '';
        }
    }

    public showTreeElem(value, key) {
        this.folderValue = value;
        this.path = [this.path[0], value];
        this.clearSelectedItem();
    }

    public showFolderElem(value, key) {
        this.folderValue = value;
        this.path.push(value);
        this.clearSelectedItem();
    }

    public goBack() {
        if (this.path.length > 1) {
            this.path.pop();
            this.folderValue = this.path[this.path.length - 1];
            this.clearSelectedItem();
        }
    }

    public addFolder(fsService) {
        this.folderValue = this.fsService.addFolder(this.folderValue);
        this.clearSelectedItem();
    }

    public addFile(fsService) {
        this.folderValue = this.fsService.addFile(this.folderValue);
        this.clearSelectedItem();
    }

    public removeItem(fsService) {
        this.folderValue = this.fsService.removeItem(this.folderValue, this.selectedItem.key);
        this.clearSelectedItem();
    }
}

export default angular
    .module('fileManagerModule', [
        fsModule.name
    ])
    .component('fileManager', component());
