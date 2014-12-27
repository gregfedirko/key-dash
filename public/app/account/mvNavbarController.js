angular
  .module('app')
  .controller('mvNavbarController', function($scope, $http, $location, mvIdentity, mvNotifier, mvAuth) {
    $scope.identity = mvIdentity;

    $scope.signout = function() {
      mvAuth.logoutUser().then(function() {
        $scope.username = "";
        $scope.password = "";
        mvNotifier.notify('You have successfully logged out');
        $location.path('/');
      });
    }

  });