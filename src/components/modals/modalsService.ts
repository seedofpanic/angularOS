import * as angular from "angular";

export class Modal {

    constructor(public template: string, private modalsService: Service) {
    }

    public close() {
        this.modalsService.close(this);
    }

    public submit() {
        this.modalsService.submit(this);
    }
}

/* @ngInject */
class Service {
    public modals: Modal[];

    constructor() {
        this.modals = [];
    }

    public show(template: string) {
        const modal = new Modal(template, this);
        this.modals.push(modal);

        // console.log('opened modal: ' + modal.template);
        // console.log(this.modals)
        return modal;
    }

    public close(modal: Modal) {
        // console.log('closed modal: ' + modal.template);
        return this.modals.pop();
    }

    public submit(modal: Modal) {
        // console.log('submited modal: ' + modal.template);
        return this.modals.pop();
    }
}

export default angular
    .module('modalsService', [])
    .service('modalService', Service);
