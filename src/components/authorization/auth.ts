import * as angular from 'angular';

require('./auth.scss');
const authTemplate = require('./auth.html');

function authorization() {
    const component = {
        bindings: {

        },
        template: authTemplate,
        controller: AuthCtrl
    };

    return component;
}

class AuthCtrl {

}

export default angular
    .module('authModule', [])
    .component('authorization', authorization());
