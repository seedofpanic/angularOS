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

    static $inject = ['$q'];

    public modals: Modal[];
    private deferred;

    constructor(public $q) {
        this.modals = [];
    }

    public openModal(template: string): void {
        this.deferred = this.show(template);

        this.deferred.promise.then(function() {
            console.log('modal frame submited')
        }).catch(function() {
            console.log('modal frame closed')
        })
    }

    private show(template: string) {
        var deferred = this.$q.defer();
        const modal = new Modal(template, this);
        this.modals.push(modal);

        return deferred;
    }

    public close(modal: Modal): void {
        this.modals.pop();
        this.deferred.reject();
    }

    public submit(modal: Modal): void {
        this.modals.pop();
        this.deferred.resolve();
    }
}

export default angular
    .module('modalsService', [])
    .service('modalService', Service);
