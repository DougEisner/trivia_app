(function(ng) {
    ng.module('TriviaApp').controller('LoginController', function($state, localStorageService, $scope, UserService, DataRequestService, $q) {

        $scope.userInfo = function() {
            let user = UserService.getUser();
            $scope.setInfo(user);
            $scope.currentUser = user; // stores the signup form submission
            return $scope.currentUser;
        };

        $scope.currentUser = {};

        $scope.loginInfo = {}; // stores the login form


        //collect the auth info
               $scope.authInfo = {
                 'access-token': '',
                 client: '',
                 uid: ''
               };


        $scope.setAuthInfo = function(requestResponse) {
            // debugger;
             $scope.authInfo['access-token'] = requestResponse.headers()["access-token"];
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

            console.log('I submit the signup form');

              $q.when(DataRequestService.post('/auth', $scope.inputInfo)).then((response) => {

                     console.log(response);
                     $scope.setAuthInfo(response);

                     $scope.setInfo($scope.inputInfo);
                     $scope.inputInfo = $scope.getInfo();

                     UserService.currentUser.push($scope.inputInfo);


                     UserService.set(response.data.data);
                    $scope.currentUser = UserService.getUser();


//
                     // set UserService.currentuser into local storage

                    //  $scope.userInfo = response.data.data;


                    //  console.log(UserService.currentUser);


                 }).catch((error) => {
                     console.log(error);
                 });

                 $state.go('TriviaParent.profile');
        };

        $scope.logout = function() { // DELETE REQUEST

            $scope.authInfo = UserService.getUserAuth();

            $q.when(DataRequestService.delete('/auth/sign_out', $scope.authInfo[0])).then((response) => {
                   console.log(response);
               }).catch((error) => {
                   console.log(error);
               });
        };


        // function for login button for existing user
        $scope.submit = function() {

            // console.log('I submit email & password');

            $scope.loginInfo.email = $scope.inputInfo.email;
            $scope.loginInfo.password = $scope.inputInfo.password;

              $q.when(DataRequestService.loginPost('auth/sign_in', $scope.loginInfo)).then((response) => {
                  console.log(response);

                  $scope.inputInfo.nickname = response.data.data.nickname;

                  console.log('logged in, set info to', $scope.inputInfo);
                  $scope.setInfo($scope.inputInfo);
                  $scope.inputInfo = $scope.getInfo();


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

        $scope.setInfo = function(userInfo) {
            console.log('set info', userInfo);
            localStorageService.set('userInfo', userInfo);
        };

        $scope.getInfo = function() {
            return localStorageService.get('userInfo') || [];
        };

    });

})(angular);
