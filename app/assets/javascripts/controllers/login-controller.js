(function(ng) {
  ng.module('TriviaApp').controller('LoginController', function($state, localStorageService, $scope, DataRequestService, $q) {
      console.log('in c');

      $scope.userInfo = []; // store userInfo array



    //   $q.when(DataRequestService.post('')).then((response) => {
    //          console.log(response);
    //          this.allQuestions = response.data; // set the response to the allQuestions Array?
    //          getAnswer(this.allQuestions.whatever); /// maybe this instead?
    //          console.log(this.allQuestions);
    //      }).catch((error) => {
    //          console.log(error);
    //      });

    // SEND DATA OF USERINFO TO POST REQUEST



      $scope.inputInfo = { // inputinfo obj
          userName: '',
          passWord: '',
          email: '',
          imageUrl: ''
      };

      // this.logout = function() {
      //     this.inputInfo.userName = null;
      //     this.inputInfo.passWord = null;
      //     $location.path('/');
      // };

      $scope.submit = function() { // submit function

        //   console.log($scope.userInfo);
          $scope.userInfo.push($scope.inputInfo); // push inputInfo in userInfo array
          $scope.setInfo($scope.userInfo); // pass userInfo in setInfo function
          $scope.userinfo = $scope.getInfo(); // set userinfo to getInfo function
        //   console.log($scope.getInfo()[0].userName);
          console.log($scope.userInfo);
      };

      $scope.setInfo = function(userInfo) { // set local storage
      localStorageService.set('userInfo', $scope.userInfo);
    };

      $scope.getInfo = function() { // get local storage
          return localStorageService.get('userInfo') || [];
    };

  });

})(angular);
