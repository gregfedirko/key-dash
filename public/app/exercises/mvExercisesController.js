(function() {
  angular
    .module('app')
    .controller('mvExercisesController', mvExercisesController);

    function mvExercisesController($scope, mvExercises) {

      $scope.exercises = mvExercises.query();

    }

})();