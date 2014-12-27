angular
  .module('app')
  .controller('mvProfileController', function($scope, mvAuth, mvIdentity, mvNotifier) {
    debugger;
    $scope.email = mvIdentity.currentUser.username;
    $scope.fname = mvIdentity.currentUser.firstName;
    $scope.lname = mvIdentity.currentUser.lastName;

    $scope.update = function() {
      var newUserData = {
        username: $scope.email,
        firstName: $scope.fname,
        lastName: $scope.lname
      }

      if($scope.password && $scope.password.length > 0) {
        newUserData.password = $scope.password;
      }

      mvAuth.updateCurrentUser(newUserData).then(function() {
        mvNotifier.notify('Your user information has been updated');
      }, function(reason) {
        mvNotifier.error(reason);
      });
    }; 
  });