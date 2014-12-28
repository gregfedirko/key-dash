(function() {
  angular
    .module('app')
    .factory('mvExerciseDataService', function(mvScores) {
      var service = {};

      service.setData = function(dataHash) {
        if (dataHash.wpm) {service.wpm = dataHash.wpm; };
        if (dataHash.errorPercentage) { service.errorPercentage = dataHash.errorPercentage; };
        if (dataHash.wastedKeyStrokes) { service.wastedKeyStrokes = dataHash.wastedKeyStrokes; };
      };

      service.save = function(dataHash) {
        console.log(dataHash);
        mvScores.save({score: dataHash});
      }

      return service;
    });
})();