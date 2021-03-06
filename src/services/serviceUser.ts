import * as angular from 'angular';

import modalsService from '../components/modals/modalsService';

function serveUser($state, $stateParams, modalService) {

    this.checkIfLogged =  function(userLogin) {
        return !!sessionStorage.getItem(userLogin);
    };

    // user not found, done
    this.login = function(userLogin, password) {
        if (localStorage.getItem(userLogin) === password) {
            sessionStorage.setItem(userLogin, 'true');
            $state.go($state.get('desktop'), {userId: userLogin});
        } else {
            modalService.openModal('<div class="lolka">login failed</div>');
        }
    };

    this.logout = function() {
        $state.go($state.get('authorization.login'));
    };

    // allready exist, registered
    this.register = function(userLogin, password) {
        if (localStorage.getItem(userLogin)) {
            modalService.openModal('user allready registered');
        } else {
            modalService.openModal('you successfuly registered');
            localStorage.setItem(userLogin, password);
            $state.go($state.get('authorization.login'));
        }
    };
}

export default angular
        .module('serviceModule', [
            modalsService.name
        ])
        .service('serveUser', serveUser);
