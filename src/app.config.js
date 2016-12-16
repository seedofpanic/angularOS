function config($stateProvider, $urlRouterProvider) {
    const loginState = {
        name: 'login',
        url: '/login',
        abstract: false,
        // component: loginForm
        template: '<login-form></login-form>'
    }

    const registrationState = {
        name: 'registration',
        url: '/registration',
        // component: registrationForm
        template: '<registration-form></registration-form>'
    }

    const authState = {
        name: 'authorization',
        url: '/authorization',
        // component: authorization,
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

    $stateProvider.state(loginState);
    $stateProvider.state(registrationState);
    $stateProvider.state(desktop);
    $urlRouterProvider.otherwise('/login');
}

export default config;
