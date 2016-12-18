function serveUser($state, $stateParams) {

    const service = {

        getUserLogged: function(userLogin) {
            return sessionStorage.getItem(userLogin);
        },

        setUserLogged: function(userLogin, isLogged) {
            sessionStorage.setItem(userLogin, isLogged);
        },

        getRandomUserId: function(min, max){
            return Math.random() * (10000 - 1) + 1;
        },

        // user not found, done
        login: function(userLogin, password) {
            if (localStorage.getItem(userLogin) == password) {
                $state.go($state.get('desktop'), {userId: '123'});
                // console.log($state.get('desktop'));
                // console.log($stateParams);
                // console.log("logged in: " + $state.get('desktop'));
                return true;
            } else {
                alert('login failed');
            }
        },

        logout: function() {
            if (localStorage.getItem(userLogin) == password) {
                this.setUserLogged(userLogin, false);
                // console.log($stateParams, {userId: this.getRandomUserId()});
                $state.go($state.get('authorization.login'));
            }
        },

        // allready exist, registered
        register: function(userLogin, password) {
            if (localStorage.getItem(userLogin)) {
                alert('user allready registered');
                return false;
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
