import * as angular from "angular";

export class Modal {

    public deferred;
    private modalsService: Service;
    public template: string;

    constructor(template: string, modalsService: Service, deferred) {
        this.deferred = deferred;
        this.template = template;
        this.modalsService = modalsService;
    }

    private close(): void {
        this.deferred.reject();
    }

    private submit(): void {
        this.deferred.resolve();
    }

    public resolveModal(): void {
        const self = this;
        this.deferred.promise.then(function() {
            self.modalsService.submit(self);
            self.submit();
        }).catch(function() {
            self.modalsService.close(self);
            self.close();
        })
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
        this.show(template);
    }

    private show(template: string): void {
        var deferred = this.$q.defer();
        const modal = new Modal(template, this, deferred);
        this.modals.push(modal);
        modal.resolveModal();
    }

    public close(modal: Modal): void {
        this.modals.splice(this.modals.indexOf(modal), 1);
        console.log('modal' + ' closed');
    }

    public submit(modal: Modal): void {
        this.modals.splice(this.modals.indexOf(modal), 1);
        console.log('modal' + ' submited');
    }
}

export default angular
    .module('modalsService', [])
    .service('modalService', Service);
