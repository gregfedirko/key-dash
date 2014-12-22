angular
  .module('app')
  .controller('mvSignUpController', function($scope, mvAuth, mvUser, $location, mvNotifier) {
    $scope.signup = function() {
      var newUserData = {
        username: $scope.email,
        password: $scope.password,
        firstName: $scope.fname,
        lastName: $scope.lname
      }

      mvAuth.createUser(newUserData).then(function() {
        mvNotifier.notify('New User Created');
        $location.path('/');
      }, function(reason) {
        mvNotifier.error(reason);
      });
    }
  });