(function(ng) {
    ng.module('TriviaApp').controller('ProfileController', function($state, localStorageService, $scope, DataRequestService, $q) {

        console.log('hi');

        // $scope.changeView = function(view) {
        //     $location.path('/game');
        // }

        // $scope.changeToGamePage = function() {
        //     $state.go('TriviaParent.login');
        // };

        $('.start-game-button').on('click', function() {
            $state.go('TriviaParent.game');
        });



        // display username, image, correctTotal, and incorrectTotal from LoginController & Game-Controller
        // may just need one MainController on the body and ng-controller for Game-Controller
        // coming from backend
    });

})(angular);
