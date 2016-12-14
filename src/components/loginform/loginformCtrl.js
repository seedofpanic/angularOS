module.exports = (function() {
    'use strict';

    require('./loginform.css');
    angular
        .module('osApp')
        .controller('loginCtrl', Controller);

    function Controller(serveUser) {
        var vm = this;

        serveUser.login(vm.login, vm.password);
    }
})();
