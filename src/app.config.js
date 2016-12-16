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

    const desktop = {
        name: 'desktop',
        url: '/desktop',
        template: '<os-frame></os-frame>',
        data: {
          'noLogin': false
        }
    }

    $stateProvider.state(authState);
    $stateProvider.state(loginState);
    $stateProvider.state(registrationState);
    $stateProvider.state(desktop);
    $urlRouterProvider.otherwise('/authorization/registration');
}

export default config;
