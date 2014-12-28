(function() {
  angular
    .module('app')
    .controller('mvExercisesController', mvExercisesController);

    function mvExercisesController($scope) {

      $scope.exercises = [
        {title: "throttle", lines: "16", language: "javascript", id: 4},
        {title: "throttle", lines: "16", language: "javascript", id: 4},
        {title: "throttle", lines: "16", language: "javascript", id: 4},
        {title: "throttle", lines: "16", language: "javascript", id: 4},
        {title: "throttle", lines: "16", language: "javascript", id: 4},
        {title: "throttle", lines: "16", language: "javascript", id: 4},
        {title: "throttle", lines: "16", language: "javascript", id: 4},

      ];

    }

})();