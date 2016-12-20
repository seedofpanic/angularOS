function serveUser($state, $stateParams) {

    const service = {

        checkIfLogged: function(userLogin) {
            if (sessionStorage.getItem(userLogin)) {
                return true;
            } else {
                return false;
            }
        },

        // user not found, done
        login: function(userLogin, password) {
            if (localStorage.getItem(userLogin) == password) {
                sessionStorage.setItem(userLogin, true);
                $state.go($state.get('desktop'), {userId: userLogin});
            } else {
                alert('login failed');
            }
        },

        logout: function() {
                $state.go($state.get('authorization.login'));
        },

        // allready exist, registered
        register: function(userLogin, password) {
            if (localStorage.getItem(userLogin)) {
                alert('user allready registered');
            } else {
                alert('you successfuly registered');
                localStorage.setItem(userLogin, password);
                $state.go($state.get('authorization.login'));
            }
        }
    }

    return service;
}

module.exports = angular
        .module('serviceModule', [])
        .service('serveUser', serveUser);
