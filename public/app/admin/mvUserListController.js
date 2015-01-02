(function() {
  angular
    .module('app')
    .controller('mvUserListController', function($scope, mvUser) {
      $scope.users = mvUser.query();
    });
})();