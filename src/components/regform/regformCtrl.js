module.exports = (function() {
    'use strict';

    require('./regform.css');
    angular
        .module('osApp')
        .controller('regformCtrl', Controller);

    function Controller(serveUser) {
        var vm = this;

        serveUser.register(vm.login, vm.firstPassword, vm.secondPassword);
    }
})();
