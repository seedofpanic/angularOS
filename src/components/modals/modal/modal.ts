import * as angular from 'angular';

const modalTemplate = require('./modal.html');
require('./modal.scss');

import focusModule from './focus';
import compileTemplateModule from './compileDirective';

function modal() {
    const component = {
        bindings: {
            template: '<',
            onClose: '&',
            onSubmit: '&'
        },
        template: modalTemplate,
        controller: Controller
    };

    return component;
}

class Controller {

    constructor() {
    }
}

export default angular
    .module('modalModule', [
        focusModule.name,
        compileTemplateModule.name
    ])
    .component('modal', modal());
