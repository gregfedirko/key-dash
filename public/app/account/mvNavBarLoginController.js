angular
  .module('app')
  .controller('mvNavBarLoginController', function($scope, $http) {
    $scope.signin = function(username, password) {
      $http.post('/login', {
        username: username, 
        password: password
      }).then(function(response) {
        if (response.data.success) {
          console.log('Logged in!');
        } else {
          console.log('invalid login info');
        }
      });
    }
  });