angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/', {
      templateUrl: '/partials/main/main', 
      controller: 'mvMainController'
    })
    .when('/admin/users', {
      templateUrl: 'partials/admin/user-list',
      controller: 'mvUserListController'
    });
});

