function serveUser() {
    const storage = localStorage;

    const service = {

        // user not found, done
        login: function(login, password) {
            if (storage.getItem(login) == password) {
                return true;
            } else {
                return false;
            }
        },

        // allready exist, registered
        register: function(login, password) {
            if (storage.getItem(login)) {
                return false;
            } else {
                storage.setItem(login, password);
                return true;
            }
        }
    }

    return service;
}

module.exports = angular
        .module('serviceModule', [])
        .service('serveUser', serveUser);
