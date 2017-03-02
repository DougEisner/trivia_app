(function(ng) {
        ng.module('TriviaApp', ['ui.router', 'templates', 'LocalStorageModule']);

        ng.module('TriviaApp').config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
            $urlRouterProvider.when('/', '/' + 'login');

            $stateProvider.state('TriviaParent', { // default home url
                url: '/',
                abstract: true,
                template: '<ui-view></ui-view>',
            }).state('TriviaParent.login', {
                url: 'login',
                templateUrl: 'login.html',
                controller: "LoginController as login"
            }).state('TriviaParent.profile', {
                url: 'profile',
                templateUrl: 'userprofile.html',
                controller: "ProfileController as profile"
            }).state('TriviaParent.game', {
                url: 'game',
                templateUrl: 'game.html',
                controller: "GameController as game"
            }).state('TriviaParent.leader', {
                url: 'leaderboard',
                templateUrl: 'leader.html',
                controller: "LeaderController as leader"
            });
        });


        })(angular);
