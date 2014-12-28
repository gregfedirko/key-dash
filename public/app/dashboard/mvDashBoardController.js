(function() {
  angular
    .module('app')
    .controller('mvDashBoardController', mvDashBoardController);

  function mvDashBoardController($scope) {

    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['wpm', 'error', 'wasted keys'];
    $scope.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [4, 52, 26, 68, 54, 28, 90],
      [28, 48, 40, 19, 86, 27, 90]
    ];
  }

})();