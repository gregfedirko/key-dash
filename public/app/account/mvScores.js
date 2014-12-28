(function() {
  angular
    .module('app')
    .factory('mvScores', function($resource) {
      var ScoreResource = $resource('/api/scores');
      return ScoreResource;
    });
})();