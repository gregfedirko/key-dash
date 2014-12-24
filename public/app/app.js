angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider) {
  var routeRoleChecks = {
    admin: {
      auth: function(mvAuth) {
        return mvAuth.autorizeCurrentUserForRoute('admin');
      }
    }, 
    user: {
      auth: function(mvAuth) {
        return mvAuth.autorizeAuthenticatedUserForRoute();
      }
    }, 

  }

  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/', {
      templateUrl: '/partials/main/main', 
      controller: 'mvMainController'
    })
    .when('/admin/users', {
      templateUrl: 'partials/admin/user-list',
      controller: 'mvUserListController',
      resolve: routeRoleChecks.admin.auth
    })
    .when('/signup', {
      templateUrl: 'partials/account/signup',
      controller: 'mvSignUpController'
    })
    .when('/profile', {
      templateUrl: 'partials/account/profile',
      controller: 'mvProfileController',
      resolve: routeRoleChecks.user.auth
    })
});

angular.module('app').run(function($rootScope, $location) {
  $rootScope.$on('$routeChangeError', function(event, current, previous, rejection) {
    if (rejection === 'not authorized') {
      $location.path('/');
    }
  })
})

