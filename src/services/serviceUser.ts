import * as angular from "angular";

function serveUser($state, $stateParams) {

    this.checkIfLogged =  function(userLogin) {
        return !!sessionStorage.getItem(userLogin);
    }

    // user not found, done
    this.login = function(userLogin, password) {
        if (localStorage.getItem(userLogin) === password) {
            sessionStorage.setItem(userLogin, 'true');
            $state.go($state.get('desktop'), {userId: userLogin});
        } else {
            alert('login failed');
        }
    }

    this.logout = function() {
            $state.go($state.get('authorization.login'));
    }

    // allready exist, registered
    this.register = function(userLogin, password) {
        if (localStorage.getItem(userLogin)) {
            alert('user allready registered');
        } else {
            alert('you successfuly registered');
            localStorage.setItem(userLogin, password);
            $state.go($state.get('authorization.login'));
        }
    }
}

export default angular
        .module('serviceModule', [])
        .service('serveUser', serveUser);
