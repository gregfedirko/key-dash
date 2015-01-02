(function() {
  'use strict';
  angular
    .module('app')
    .factory('mvScores', mvScores);

    function mvScores($resource) {
      var ScoreResource = $resource('/api/scores');
      return ScoreResource;
    }
})();