(function(ng) {
  ng.module('TriviaApp').service('UserService', function() {
      let currentUser = []; // let currentUser = [];
    //   console.log(currentUser);
      function getUser() {
          return currentUser;
      }

      return {
          currentUser: currentUser,
          getUser:  getUser
      };
  });

})(angular);
