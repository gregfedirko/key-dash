(function() {
  'use strict';
  angular
    .module('app')
    .controller('mvLoginController', mvLoginController);

    function mvLoginController($scope, $http, $location, mvIdentity, mvNotifier, mvAuth) {
      $scope.identity = mvIdentity;
      $scope.signin = function(username, password) {
        mvAuth.authenticateUser(username, password).then(function(success) {
          if(success) {
            mvNotifier.notify('successfully logged in');
            $scope.email = "";
            $scope.password = "";
            $location.path('/');
          } else {
            mvNotifier.error('username/password combination incorrect');
          }
        });
      }
    }
})();