(function() {
  'use strict';
  angular
    .module('app')
    .factory('mvIdentity', mvIdentity); 

    function mvIdentity($window, mvUser) {
      var currentUser;
      if (!!$window.bootstrappedUserObject) {
        currentUser = new mvUser();
        angular.extend(currentUser, $window.bootstrappedUserObject);
      }
      return {
        currentUser: currentUser,
        isAuthenticated: function() {
          return !!this.currentUser;
        }, 
        isAuthorized: function(role) {
          return !!this.currentUser && this.currentUser.roles.inxexOf(role) > -1;
        }
      }
    }
    
})();