(function() {
  'use strict';
  angular
    .module('app')
    .controller('mvDashBoardController', mvDashBoardController);

  function mvDashBoardController($scope, mvScores) {
    $scope.labels = [];
    $scope.series = ['wpm', 'error', 'wasted keys'];
    $scope.data = [
      [],
      [],
      []
    ];

    mvScores.query(function(scores) {
      console.log(scores);
      _.forEach(scores, function(score, index) {
        $scope.labels.push(index);
        $scope.data[0].push(score.wpm);
        $scope.data[1].push(score.errorPercentage * 100);
        $scope.data[2].push(score.wastedKeyStrokes);
      })
    });

  }

})();