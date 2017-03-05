(function(ng) {
  ng.module('TriviaApp').service('UserService', function() {
      let currentUser = []; 
      function getUser() {
          return currentUser;
      }

      return {
          currentUser: currentUser,
          getUser:  getUser
      };
  });

})(angular);
