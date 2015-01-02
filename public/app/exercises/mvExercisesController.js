(function() {
  'use strict';
  angular
    .module('app')
    .controller('mvExercisesController', mvExercisesController);

    function mvExercisesController($scope, mvExercises) {

      $scope.imgSrcMap = {
        "JavaScript": "../../img/javascript-logo-50.png",
        "Ruby": "../../img/ruby-logo-50.png",
        "Python": "../../img/python-logo-50.png"
      }

      $scope.exercises = mvExercises.query();

    }

})();