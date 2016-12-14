module.exports = (function() {
    'use strict';

    angular
        .module('osApp')
        .service('serveUser', serveUser);

    function serveUser(login, password) {

        var service = {
            login: function() {
                if (localstorage.getItem(login) == password) {
                    return true;
                }
            },

            register: function() {
                if (localstorage.getItem(login)) {
                    return "user already exist";
                } else {
                    localstorage.setItem(login, password);
                }
            }
        }

        return service;
    }
})();
