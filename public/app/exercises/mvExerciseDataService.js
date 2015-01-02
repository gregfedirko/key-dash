(function() {
  angular
    .module('app')
    .factory('mvExerciseDataService', mvExerciseDataService);

    function mvExerciseDataService(mvScores) {
      var service = {
        setData: setData,
        save: save
      };
      return service;

      function setData(dataHash) {
        if (dataHash.wpm) {service.wpm = dataHash.wpm; };
        if (dataHash.errorPercentage) { service.errorPercentage = dataHash.errorPercentage; };
        if (dataHash.wastedKeyStrokes) { service.wastedKeyStrokes = dataHash.wastedKeyStrokes; };
      };

      function save(dataHash) {
        console.log(dataHash);
        mvScores.save({score: dataHash});
      }

    }
})();