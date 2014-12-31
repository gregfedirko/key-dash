angular.module('app', ['ngResource', 'ngRoute', 'chart.js', 'duScroll']);

angular.module('app').config(function($routeProvider, $locationProvider) {
  var routeRoleChecks = {
    admin: {
      auth: function(mvAuth) {
        return mvAuth.authorizeCurrentUserForRoute('admin');
      }
    }, 
    user: {
      auth: function(mvAuth) {
        return mvAuth.authorizeAuthenticatedUserForRoute();
      }
    }, 

  };

  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/', {
      templateUrl: '/partials/main/main', 
      controller: 'mvMainController',
      resolve: {
        load: function($q, mvIdentity){
          var defer = $q.defer();
          if(!mvIdentity.isAuthenticated()){
            defer.resolve();
          } else {
            defer.reject("logged in");
          }
          return defer.promise;

        }
      }
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
    .when('/results', {
      templateUrl: 'partials/results/results',
      controller: 'mvResultsController'
    })
    .when('/exercises', {
      templateUrl: 'partials/exercises/exercises',
      controller: 'mvExercisesController'
    })
    .when('/exercises/:id', {
      templateUrl: 'partials/typing/typing',
      controller: 'mvTypingController'
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
    } else if (rejection === 'logged in') {
      $location.path('/dashboard')
    }

  })
})

