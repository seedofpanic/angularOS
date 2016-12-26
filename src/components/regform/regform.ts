import * as angular from "angular";

const regStyles = require('./regform.scss');
const regTemplate = require('./registration.html');
import serviceModule from '../../services/serviceUser';
import comparePassModule from './compareDirective';

function registration() {
    const component = {
        bindings: {
            login: '<',
            firstPassword: '<',
            secondPassword: '<'
        },
        template: regTemplate,
        controller: registrationCtrl,
        controllerAs: 'regCtrl'
    };

    return component;
}

class registrationCtrl {
    static $inject = ['serveUser'];

    private firstPassword: string;
    private secondPassword: string;
    private login: string;

    private serveUser;

    constructor(serveUser) {
        this.serveUser = serveUser;
    }

    public sendUserRegistration() {
        if (this.firstPassword == this.secondPassword) {
            this.serveUser.register(this.login, this.firstPassword);
        } else {
            console.log('Sorry passwords not indent');
        }
    }
}

export default angular
    .module('regModule', [
        serviceModule.name,
        comparePassModule.name
    ])
    .component('regForm', registration());
