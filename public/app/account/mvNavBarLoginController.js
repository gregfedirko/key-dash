angular
  .module('app')
  .controller('mvNavBarLoginController', function($scope, $http, mvIdentity, mvNotifier, mvAuth) {
    $scope.identity = mvIdentity;
    $scope.signin = function(username, password) {
      mvAuth.authenticateUser(username, password).then(function(success) {
        if(success) {
          mvNotifier.notify('successfully logged in');
        } else {
          mvNotifier.notify('username/password combination incorrect');
        }
      });

    }
  });