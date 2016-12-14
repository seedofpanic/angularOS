(function() {
    'use strict';

    require('./loginform.css');
    angular
        .module('osApp')
        .component('login', login());

    function login() {
        var component = {
            templateUrl: './login.html',
            controller: Controller,
        };

        return component;
    }

    Controller.$inject = ['serveUser'];

    function Controller(serveUser) {

        serveUser.login(vm.login, vm.password);
    }
})();
