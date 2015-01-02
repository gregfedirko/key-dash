(function() {
  'use strict';

  angular
    .module('app')
    .factory('mvAuth', mvAuth);

    function mvAuth($http, $q, mvIdentity, mvUser) {
      var service = {
        authenticateUser: authenticateUser,
        createUser: createUser,
        updateCurrentUser: updateCurrentUser,
        logoutUser: logoutUser,
        authorizeCurrentUserForRoute: authorizeCurrentUserForRoute,
        authorizeAuthenticatedUserForRoute: authorizeAuthenticatedUserForRoute
      };

      return service;
      /////////////////////////

      function authenticateUser (username, password) {
          
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
      }

      function createUser (newUserData) {
        var newUser = new mvUser(newUserData);
        var defered = $q.defer();

        newUser.$save().then(function() {
          mvIdentity.currentUser = newUser;
          defered.resolve();
        }, function(response) {
          defered.reject(response.data.reason);
        }); 

        return defered.promise;
      }

      function updateCurrentUser (newUserData) {
        var defered = $q.defer();

        var clone = angular.copy(mvIdentity.currentUser);

        angular.extend(clone, newUserData);

        clone.$update().then(function() {
          mvIdentity.currentUser = clone;
          defered.resolve();
        }, function(response) {
          defered.reject(response.data.reason)
        });

        return defered.promise;
      }

      function logoutUser() {
        var defered = $q.defer();
        $http.post('/logout', {
          logout: true
        }).then(function(response) {
            mvIdentity.currentUser = undefined;
            defered.resolve();
        });

        return defered.promise;
      } 

      function authorizeCurrentUserForRoute(role) {
        if (mvIdentity.isAuthorized(role)) {
          return true;
        } else {
          return $q.reject('not authorized');
        }
      }

      function authorizeAuthenticatedUserForRoute() {
        if (mvIdentity.isAuthenticated()) {
          return true;
        } else {
          return $q.reject('not authenticated');
        }
      }
    }

})();