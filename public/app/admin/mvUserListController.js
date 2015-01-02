(function() {
  'use strict';
  angular
    .module('app')
    .controller('mvUserListController', mvUserListController);

    function mvUserListController($scope, mvUser) {
      $scope.users = mvUser.query();
    }
})();