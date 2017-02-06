import * as angular from 'angular';

require('./loginform.scss');
const loginTemplate = require('./login.html');
import serviceModule from '../../services/serviceUser';

function login() {
    const component = {
        bindings: {
            login: '<',
            password: '<'
        },
        template: loginTemplate,
        controller: LoginCtrl
    };

    return component;
}

class LoginCtrl {
    static $inject = ['serveUser'];

    private serveUser;
    private login: string;
    private password: string;

    constructor(serveUser) {
        this.serveUser = serveUser;
    }

    public sendUserLogin() {
        this.serveUser.login(this.login, this.password);
    }
}

export default angular
    .module('loginModule', [
        serviceModule.name
    ])
    .component('loginForm', login());
