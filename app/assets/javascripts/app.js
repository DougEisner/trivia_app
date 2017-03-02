(function(ng) {
        ng.module('TriviaApp', ['ui.router', 'templates', 'LocalStorageModule']);

        ng.module('TriviaApp').config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');

            $stateProvider.state('TriviaParent', { // default home url
                url: '/',
                abstract: true,
                template: '<ui-view></ui-view>',
            }).state('TriviaParent.login', {
                url: 'home',
                templateUrl: 'home.html',
                controller: "LoginController as login"
            });
        });


        })(angular);
