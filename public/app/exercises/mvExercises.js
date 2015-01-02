(function() {
  angular
    .module('app')
    .factory('mvExercises', mvExercises);

    function mvExercises($resource) {
      var ExercisesResource = $resource('/api/exercises/:_id', {_id: "@id"});

      return ExercisesResource;
    });
})();