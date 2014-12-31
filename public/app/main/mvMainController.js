angular.module('app').controller('mvMainController', function($scope) {


  $scope.labels = [1,2,3,4,5,6,7];
  $scope.series = ['wpm', 'error', 'wasted keys'];

  $scope.data = null;

  $scope.triggerFunction = function() {
    if (!$scope.data) {
      $scope.data = [
        [10, 12, 18, 25, 16, 22, 23],
        [15, 10, 12, 8, 5, 5, 7, 8],
        [40, 34, 30, 32, 18, 16, 20]
      ];
    }
  }
});