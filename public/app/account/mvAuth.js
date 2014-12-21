angular
  .module('app')
  .factory('mvAuth', function($http, mvIdentity, $q, mvUser) {
    return {
      authenticateUser: function(username, password) {
        
        var defered = $q.defer();
        $http.post('/login', {
          username: username, 
          password: password
        }).then(function(response) {
          if (response.data.success) {
            var user = new mvUser();
            angular.extend(user, response.data.user);
            mvIdentity.currentUser = user;
            defered.resolve(true);
          } else {
            defered.resolve(false);
          }
        });

        return defered.promise;
      },
      logoutUser: function() {
        var defered = $q.defer();
        $http.post('/logout', {
          logout: true
        }).then(function(response) {
            mvIdentity.currentUser = undefined;
            defered.resolve();
        });

        return defered.promise;
      }
    }
  });