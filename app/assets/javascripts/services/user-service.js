(function(ng) {
  ng.module('TriviaApp').service('UserService', function() {
      let currentUser = [];
      let userAuth = [];

      function getUserAuth() {
          return userAuth;
      }

      function setUserAuth(auth) {
          userAuth.push(auth);
      }

      function getUser() {
          return currentUser;
      }
      function setUser(user) {
          currentUser.push(user);
      }

      return {
          currentUser: currentUser,
          getUser: getUser,
          set: setUser,
          getUserAuth: getUserAuth,
          setUserAuth: setUserAuth
      };
  });

})(angular);
