function config($stateProvider, $urlRouterProvider) {
    let loginState = {
      name: 'login',
      url: '/login',
      abstract: false,
      templateUrl: './components/loginform/login.html'
    }

    let registrationState = {
      name: 'registration',
      url: '/registration',
      templateUrl: './components/regform/registration.html'
    }

    $stateProvider.state(loginState);
    $stateProvider.state(registrationState);
    $urlRouterProvider.otherwise('/login');
}

export default config;
