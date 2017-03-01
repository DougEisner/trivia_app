(function(ng) {
  ng.module('TriviaApp', ['ui.router', 'templates']);

  ng.module('TriviaApp').config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('home');

    $stateProvider.state('home', {
      url: '/home',
      templateUrl: '_home.html', // can move to template folder
      controller: 'LoginController as login' // views/ home /index.html.erb <ui-view></ui-view>
    });
  });


})(angular);
