(function() {
  angular
    .module('app')
    .controller('mvDashBoardController', mvDashBoardController);

  function mvDashBoardController($scope) {
    $scope.foo = "bar";
  }

})();