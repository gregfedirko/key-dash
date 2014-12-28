(function() {
  angular
    .module('app')
    .factory('mvExerciseDataService', function() {
      var service = {};

      service.setData = function(dataHash) {
        if (dataHash.wpm) {service.wpm = dataHash.wpm; };
        if (dataHash.errorPercentage) { service.errorPercentage = dataHash.errorPercentage; };
        if (dataHash.wastedKeyStrokes) { service.wastedKeyStrokes = dataHash.wastedKeyStrokes; };
      };

      service.save = function() {
        console.log('save');
      }

      return service;
    });
})();