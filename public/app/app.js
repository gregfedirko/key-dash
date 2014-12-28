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

  };

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
    .when('/login', {
      templateUrl: 'partials/account/login',
      controller: 'mvLoginController'
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
    .when('/typing', {
      templateUrl: 'partials/typing/typing',
      controller: 'mvTypingController'
    })
    .when('/exercises', {
      templateUrl: 'partials/exercises/exercises'
    })
    .when('/dashboard', {
      templateUrl: 'partials/dashboard/dashboard',
      controller: 'mvDashBoardController'
    });
    
});

angular.module('app').run(function($rootScope, $location) {
  $rootScope.$on('$routeChangeError', function(event, current, previous, rejection) {
    if (rejection === 'not authorized') {
      $location.path('/');
    }
  })
})

