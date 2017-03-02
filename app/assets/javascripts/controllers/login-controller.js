(function(ng) {
  ng.module('TriviaApp').controller('LoginController', function($state, localStorageService, $scope, DataRequestService, $q) {
      console.log('in c');

      $scope.userInfo = []; // store userInfo array
    //   DataRequestService.currentUser =

    //   $scope.postData = function(url) {
    //       return $http({
    //           method: 'POST',
    //           url: url,
    //           headers: {
    //               "content-type": "application/json;charset=utf-8"
    //           },
    //           data: {
    //               nickname: inputInfo.userName,
    //               email: inputInfo.email,
    //               password: inputInfo.passWord,
    //               password_confirmation: inputInfo.passWord,
    //               image: inputInfo.imageUrl
    //           }
    //       });
    //   }



    //   $q.when(DataRequestService.post('http://localhost:3000/auth', $scope.userInfo.inputInfo)).then((response) => {
    //          console.log(response);
    //         //  this.allQuestions = response.data; // set the response to the allQuestions Array?
    //         //  getAnswer(this.allQuestions.whatever); /// maybe this instead?
    //         //  console.log(this.allQuestions);
    //      }).catch((error) => {
    //          console.log(error);
    //      });

    // SEND DATA OF USERINFO TO POST REQUEST


    $('.toggle-link').on('click', function() {

    });


      $scope.inputInfo = { // inputinfo obj
          nickname: '',
          email: '',
          password: '',
          image: ''
      };



    //   $('.login').on('click', function() {
    //       $q.when(DataRequestService.post('http://localhost:3000/auth', $scope.userInfo[0])).then((response) => {
    //              console.log(response);
    //             //  this.allQuestions = response.data; // set the response to the allQuestions Array?
    //             //  getAnswer(this.allQuestions.whatever); /// maybe this instead?
    //             //  console.log(this.allQuestions);
    //          }).catch((error) => {
    //              console.log(error);
    //          });
    //   });

      // this.logout = function() { // DELETE REQUEST
      //     this.inputInfo.userName = null;
      //     this.inputInfo.passWord = null;
      //     $location.path('/'); $state.go('TriviaParent.login'); http://localhost:3000/#!/login
      // };

      $scope.submit = function() { // submit function


        //   console.log($scope.userInfo);
          $scope.userInfo.push($scope.inputInfo); // push inputInfo in userInfo array
          $scope.setInfo($scope.userInfo); // pass userInfo in setInfo function
          $scope.userinfo = $scope.getInfo(); // set userinfo to getInfo function
        //   console.log($scope.getInfo()[0].userName);
          console.log($scope.userInfo[0].email, $scope.userInfo[0].password);

          $q.when(DataRequestService.post('http://localhost:3000/auth', $scope.userInfo[0])).then((response) => {
                 console.log(response);

                 console.log('hi');
                //  this.allQuestions = response.data; // set the response to the allQuestions Array?
                //  getAnswer(this.allQuestions.whatever); /// maybe this instead?
                //  console.log(this.allQuestions);
             }).catch((error) => {
                 console.log(error);
             });
      };

      $scope.setInfo = function(userInfo) { // set local storage
      localStorageService.set('userInfo', $scope.userInfo);

    //   $q.when(DataRequestService.post('http://localhost:3000/auth', $scope.userInfo.inputInfo)).then((response) => {
    //          console.log(response);
    //         //  this.allQuestions = response.data; // set the response to the allQuestions Array?
    //         //  getAnswer(this.allQuestions.whatever); /// maybe this instead?
    //         //  console.log(this.allQuestions);
    //      }).catch((error) => {
    //          console.log(error);
    //      });
    };

      $scope.getInfo = function() { // get local storage
          return localStorageService.get('userInfo') || [];
    };

  });

})(angular);
