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
        // data: {
        //   'noLogin': false
        // },
        resolve: {
            userId: function() {
                // return serveUser.getRandomUserId();
                return "123";
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
