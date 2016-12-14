(function() {
    'use strict';

    require('./regform.css');
    angular
        .module('osApp')
        .component('registration', registration());

    function registration() {
        var component = {
            templateUrl: './registration.html',
            controller: Controller,
        };

        return component;
    }

    Controller.$inject = ['serveUser'];

    function Controller(serveUser) {

        serveUser.register(vm.login, vm.firstPassword, vm.secondPassword);
    }
})();
