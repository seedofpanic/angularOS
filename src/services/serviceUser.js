function serveUser($state) {

    const service = {

        status: {
            authorized: false,
        },

        getAuthStatus: function() {
            return status.authorized;
        },

        setAuthStatus: function(state) {
            status.authorized = state;
        },

        // user not found, done
        login: function(login, password) {
            if (localStorage.getItem(login) == password) {
                // alert('you logged in');
                this.status.authorized = true;
                $state.go($state.get('desktop'));
                return true;
            } else {
                alert('login failed');
            }
        },

        // allready exist, registered
        register: function(login, password) {
            if (localStorage.getItem(login)) {
                alert('user allready registered');
                return false;
            } else {
                alert('you successfuly registered');
                localStorage.setItem(login, password);
                $state.go($state.get('authorization.login'));
            }
        }
    }

    return service;
}

module.exports = angular
        .module('serviceModule', [])
        .service('serveUser', serveUser);
