(function(ng) {
    ng.module('TriviaApp').controller('LoginController', function($state, localStorageService, $scope, UserService, DataRequestService, $q) {

        $scope.userInfo = UserService.getUser(); // stores the signup form submission


        $scope.currentUser = [];


        $scope.loginInfo = {}; // stores the login form


        //collect the auth info
               $scope.authInfo = {
                 token: '',
                 client: '',
                 uid: ''
               };


        setAuthInfo = function(requestResonse) {
            // debugger;
             $scope.authInfo.token = requestResonse.headers()["access-token"];
             $scope.authInfo.client = requestResonse.headers().client;
             $scope.authInfo.uid = requestResonse.headers().uid;
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

            $scope.userInfo.push($scope.inputInfo);


            console.log('I submit the signup form');

              $q.when(DataRequestService.post('/auth', $scope.userInfo[0])).then((response) => {

                     console.log(response);
                     setAuthInfo(response);

                     $scope.userInfo = response.data.data;
                     UserService.currentUser.push($scope.userInfo);

                     UserService.currentUser = response.data.data;

                     console.log(UserService.currentUser);


                 }).catch((error) => {
                    //  console.log(error);
                 });

                 $state.go('TriviaParent.profile');
        };

        $scope.logout = function() { // DELETE REQUEST


            $q.when(DataRequestService.delete('/auth/sign_out', $scope.authInfo)).then((response) => {
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
            $scope.userInfo.push($scope.loginInfo);


              $q.when(DataRequestService.loginPost('auth/sign_in', $scope.loginInfo)).then((response) => {
                  console.log(response);

                  setAuthInfo(response);

                  UserService.currentUser.push($scope.loginInfo);

                  UserService.currentUser = response.data.data;

                  $scope.userInfo = $scope.currentUser;

                console.log(userInfo);

                 }).catch((error) => {
                    //  console.log(error);
                 });
                 $state.go('TriviaParent.profile');
        };

    });

})(angular);
