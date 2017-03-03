(function(ng) {
    ng.module('TriviaApp').controller('LoginController', function($state, localStorageService, $scope, UserService, DataRequestService, $q) {
        // console.log(UserService.getUser());
        $scope.userInfo = UserService.getUser(); // stores the signup form submission
        // console.log($scope.userInfo);

        $scope.loginInfo = {}; // stores the login form





        //   $q.when(DataRequestService.post('http://localhost:3000/auth', $scope.userInfo.inputInfo)).then((response) => {
        //          console.log(response);
        //         //  this.allQuestions = response.data; // set the response to the allQuestions Array?
        //         //  getAnswer(this.allQuestions.whatever); /// maybe this instead?
        //         //  console.log(this.allQuestions);
        //      }).catch((error) => {
        //          console.log(error);
        //      });

        // SEND DATA OF USERINFO TO POST REQUEST



        // events for toggling login
        $('.toggle-link').on('click', function() {
            $('.image-url').toggleClass('is-hidden');
            $('.username').toggleClass('is-hidden');
            $('.toggle-link').toggleClass('is-hidden');
            $('.signup').toggleClass('is-hidden');
            $('.login').toggleClass('is-hidden');
        });

        $('.signup').on('click', function() {
            $('.signup').addClass('is-hidden');
        });



        // stores all of user's info needed
        $scope.inputInfo = {
            nickname: '',
            email: '',
            password: '',
            image: ''
        };

        // function for the login button for the signup form
        $scope.loginStuff = function() {

            $scope.userInfo.push($scope.inputInfo); // push inputInfo in userInfo array
            $scope.setInfo($scope.userInfo); // pass userInfo in setInfo function

            $scope.setInfo($scope.userInfo); // pass userInfo in setInfo function
            $scope.userinfo = $scope.getInfo(); // set userinfo to getInfo function

            console.log($scope.userInfo[0]);

            console.log('I submit the signup form');

              $q.when(DataRequestService.loginPost('http://localhost:3000/auth', $scope.userInfo[0])).then((response) => {
                     console.log(response.data.data);

                     $scope.userInfo = response.data.data;
                     UserService.currentUser.push($scope.userInfo);
                     console.log(UserService.currentUser);


                    //  console.log($scope.userInfo[0]);
                    //  this.allQuestions = response.data; // set the response to the allQuestions Array?
                    //  getAnswer(this.allQuestions.whatever); /// maybe this instead?
                    //  console.log(this.allQuestions);
                 }).catch((error) => {
                    //  console.log(error);
                 });

                 $state.go('TriviaParent.profile');
        };

        $scope.logout = function() { // DELETE REQUEST
            // $scope.userInfo = [];
            // $location.path('/'); $state.go('TriviaParent.login'); http://localhost:3000/#!/login

            $q.when(DataRequestService.delete('http://localhost:3000/auth/sign_out')).then((response) => {
                   console.log(response);
               }).catch((error) => {
                  //  console.log(error);
               });
        };


        // function for login button for the initial login
        $scope.submit = function() { // submit function

            // console.log('I submit email & password');

            $scope.loginInfo.email = $scope.inputInfo.email; // grab the email property and push in loginInfo array
            $scope.loginInfo.password = $scope.inputInfo.password; // grab the password property and push in loginInfo array
            $scope.newInfo($scope.userInfo);

            // console.log($scope.loginInfo);

            $scope.newInfo($scope.loginInfo); // pass newInfo in newInfo function
            $scope.loginInfo = $scope.getNew(); // set loginInfo to getNew function
            $state.go('TriviaParent.profile');

              //
              $q.when(DataRequestService.post('http://localhost:3000/auth/sign_in', $scope.loginInfo)).then((response) => {
                  console.log(response);


                $scope.userInfo = response.data.data;
                UserService.currentUser.push($scope.userInfo);
                console.log(UserService.currentUser);
                    //  console.log('hi');
                    //  this.allQuestions = response.data; // set the response to the allQuestions Array?
                    //  getAnswer(this.allQuestions.whatever); /// maybe this instead?
                    //  console.log(this.allQuestions);
                 }).catch((error) => {
                    //  console.log(error);
                 });
        };

        $scope.setInfo = function(userInfo) { // set local storage
            localStorageService.set('userInfo', $scope.userInfo);
        //
        //     //   $q.when(DataRequestService.post('http://localhost:3000/auth', $scope.userInfo.inputInfo)).then((response) => {
        //     //          console.log(response);
        //     //         //  this.allQuestions = response.data; // set the response to the allQuestions Array?
        //     //         //  getAnswer(this.allQuestions.whatever); /// maybe this instead?
        //     //         //  console.log(this.allQuestions);
        //     //      }).catch((error) => {
        //     //          console.log(error);
        //     //      });
        };
        //
        $scope.getInfo = function() { // get local storage
            return localStorageService.get('userInfo') || [];
        };

        $scope.newInfo = function(loginInfo) {
            localStorageService.set('loginInfo', $scope.loginInfo);
        };

        $scope.getNew = function() {
            return localStorageService.get('loginInfo');
        };

    });

})(angular);
