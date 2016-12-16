'use strict';

require('./frame.scss');
const frameTemplate = require('./frame.html');

/* @ngInject */
function component() {
    var component = {
        template: frameTemplate,
        controller: Controller,
    };

    return component;
}

// Controller.$inject = [''];

/* @ngInject */
function Controller() {

}

module.exports = angular
    .module('frameModule', [])
    .component('osFrame', component());
