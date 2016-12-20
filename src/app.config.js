function config($stateProvider, $urlRouterProvider) {
    const loginState = {
        name: 'authorization.login',
        url: '/login',
        template: '<login-form></login-form>'
    }

    const registrationState = {
        name: 'authorization.registration',
        url: '/registration',
        template: '<reg-form></reg-form>'
    }

    const authState = {
        name: 'authorization',
        url: '/authorization',
        template: '<authorization></authorization>',
        data: {
          'noLogin': true
        }
    }

    const desktopState = {
        name: 'desktop',
        url: '/desktop{userId}',
        template: '<os-frame></os-frame>',
        data: {
          'noLogin': false
        },
        onEnter: function(serveUser, $stateParams, $state) {
            console.log($stateParams.userId);
            console.log(serveUser.checkIfLogged($stateParams.userId));
            if (!serveUser.checkIfLogged($stateParams.userId)) {
                $state.go('authorization.login')
            }
        }
    }

    $stateProvider.state(authState);
    $stateProvider.state(loginState);
    $stateProvider.state(registrationState);
    $stateProvider.state(desktopState);
    $urlRouterProvider.otherwise('/authorization/login');
}

export default config;
