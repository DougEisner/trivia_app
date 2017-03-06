(function(ng) {
    ng.module('TriviaApp').controller('LoginController', function($state, localStorageService, $scope, UserService, DataRequestService, $q) {

        $scope.userInfo = function() {
            $scope.currentUser = UserService.getUser(); // stores the signup form submission
            return $scope.currentUser[0];
        }

        $scope.currentUser = {};

        $scope.loginInfo = {}; // stores the login form


        //collect the auth info
               $scope.authInfo = {
                 token: '',
                 client: '',
                 uid: ''
               };


        $scope.setAuthInfo = function(requestResponse) {
            // debugger;
             $scope.authInfo.token = requestResponse.headers()["access-token"];
             $scope.authInfo.client = requestResponse.headers().client;
             $scope.authInfo.uid = requestResponse.headers().uid;

             UserService.setUserAuth($scope.authInfo);
        };


        // events for toggling login and signup
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

            // $scope.userInfo.push($scope.inputInfo);

            console.log('I submit the signup form');

              $q.when(DataRequestService.post('/auth', $scope.inputInfo)).then((response) => {

                     console.log(response);
                     $scope.setAuthInfo(response);

                     UserService.currentUser.push($scope.inputInfo);


                     UserService.set(response.data.data);
                    $scope.currentUser = UserService.getUser();


                    //  UserService.currentUser = response.data.data;
                    //  $scope.currentUser = response.data.data;

                    //  UserService.set(response.data.data);
                    //  $scope.currentUser = UserService.getUser();

                    //  console.log($scope.currentUser);
//
                     // set UserService.currentuser into local storage

                    //  $scope.userInfo = response.data.data;


                    //  console.log(UserService.currentUser);


                 }).catch((error) => {
                    //  console.log(error);
                 });

                 $state.go('TriviaParent.profile');
        };

        $scope.logout = function() { // DELETE REQUEST

            $scope.authInfo = UserService.getUserAuth();

            $q.when(DataRequestService.delete('/auth/sign_out', $scope.authInfo[0])).then((response) => {
                   console.log(response);
               }).catch((error) => {
                  //  console.log(error);
               });
        };


        // function for login button for the initial login
        $scope.submit = function() {

            // console.log('I submit email & password');

            $scope.loginInfo.email = $scope.inputInfo.email; // grab the email property and push in loginInfo array
            $scope.loginInfo.password = $scope.inputInfo.password; // grab the password property and push in loginInfo array
            // $scope.userInfo.push($scope.loginInfo);
            // console.log($scope.loginInfo);


              $q.when(DataRequestService.loginPost('auth/sign_in', $scope.loginInfo)).then((response) => {
                  console.log(response);


                 $scope.setAuthInfo(response);
                //   UserService.currentUser.push($scope.loginInfo);

                UserService.set(response.data.data);
                $scope.currentUser = UserService.getUser();

                //   $scope.userInfo = $scope.response.data.data;

                console.log(userInfo);

                 }).catch((error) => {
                    //  console.log(error);
                 });
                 $state.go('TriviaParent.profile');
        };

    });

})(angular);
