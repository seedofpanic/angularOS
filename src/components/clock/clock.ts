import * as angular from 'angular';

require('./clock.scss');
const clockTemplate = require('./clock.html');

/* @ngInject */
function component() {
    var component = {
        template: clockTemplate,
        controller: Controller
    };

    return component;
}

/* @ngInject */
class Controller {
    static $inject = ['$interval'];

    private currentDate: Date;
    public minutes;
    public hours;
    private $interval;

    constructor($interval) {
        this.$interval = $interval;
        this.currentDate = new Date();
        this.minutes = this.currentDate.getMinutes();
        this.hours = this.currentDate.getHours();
        this.getDate();
    }

    public getDate() {
        this.$interval(() => {
            this.currentDate = new Date();
            this.minutes = this.currentDate.getMinutes();
            this.hours = this.currentDate.getHours();
        }, 1000);
    }

}

export default angular
    .module('clockModule', [])
    .component('clock', component());
