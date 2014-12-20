angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/', {
      templateUrl: '/partials/main', 
      controller: 'MainController'
    });
});

angular.module('app').controller('MainController', function($scope) {

  $scope.myVar = 'Hello Angular';

});