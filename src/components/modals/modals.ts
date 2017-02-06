import * as angular from 'angular';

import modalsService from './modalsService';
import modalModule from './modal/modal';

require('./modals.scss');
const modalsTemplate = require('./modals.html');

function modals() {
    const component = {
        bindings: {
        },
        template: modalsTemplate,
        controller: Controller
    };

    return component;
}

class Controller {

    static $inject = ['modalService'];

    public modals;

    constructor( public modalService) {
        this.modals = modalService.modals;
        // console.log(this.modals + '  modals modals')
    }
}

export default angular
    .module('modalsModule', [
        modalsService.name,
        modalModule.name
    ])
    .component('modals', modals());
