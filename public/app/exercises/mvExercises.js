(function() {
  angular
    .module('app')
    .factory('mvExercises', function($resource) {
      var ExercisesResource = $resource('/api/exercises/:_id', {_id: "@id"});

      return ExercisesResource;
    });
})();