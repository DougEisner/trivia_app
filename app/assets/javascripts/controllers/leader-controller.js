(function(ng) {
    ng.module('TriviaApp').controller('LeaderController', function($state, localStorageService, $scope, DataRequestService, $q) {
        console.log('hi');

        $scope.changeToGamePage = function() {
            $state.go('TriviaParent.game');
        };


      // ** add user service??

    });

})(angular);
