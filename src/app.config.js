function config($stateProvider, $urlRouterProvider) {
    const loginState = {
      name: 'login',
      url: '/login',
      abstract: false,
    //   component: 'loginForm'
      template: '<login-form></login-form>'
    }

    const registrationState = {
      name: 'registration',
      url: '/registration',
    //   component: 'registrationForm'
      template: '<registration-form></registration-form>'
    }

    $stateProvider.state(loginState);
    $stateProvider.state(registrationState);
    $urlRouterProvider.otherwise('/login');
}

export default config;
