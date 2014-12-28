(function() {
  angular
    .module('app')
    .controller('mvResultsController', function($scope, mvExerciseDataService, mvIdentity) {
      $scope.identity = mvIdentity;
      
      $scope.wpm = mvExerciseDataService.wpm;
      $scope.errorPercentage = mvExerciseDataService.errorPercentage;
      $scope.wastedKeyStrokes = mvExerciseDataService.wastedKeyStrokes;

      $scope.saveResults = function() {
        mvExerciseDataService.save({
          wpm: $scope.wpm,
          errorPercentage: $scope.errorPercentage,
          wastedKeyStrokes: $scope.wastedKeyStrokes
        });
      };
    })
})();