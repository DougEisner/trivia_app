(function(ng) {
  ng.module('TriviaApp', ['ui.router', 'templates', 'LocalStorageModule']);

  ng.module('TriviaApp').config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('home');

    $stateProvider.state('home', { // ParentState, abstract true, state. ParentState.index (move ui-view to index folder)
      url: '/home',
      templateUrl: 'main/_home.html', // can move to template folder
      controller: 'MainController' // views/ home /index.html.erb <ui-view></ui-view>
    });
  });


})(angular);
