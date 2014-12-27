(function() {
  angular
    .module('app')
    .factory('dataService' , ['$http', '$q', function($http, $q) {

      var service = {
        getData: getData
      };

      return service;

      ////////////////////

      function getData() {
        var typrPromptDirectoryUrl = "https://api.github.com/repos/gregfedirko/typr/contents/typr_prompts/";

        var promptList = [
          'prompt1.js',
          'prompt2.js',
          'prompt3.js',
          'prompt4.js',
          'prompt5.js'
        ];

        var getRandomUrl = function() {
          var randomFile = promptList[Math.floor(Math.random() * promptList.length)];
          return typrPromptDirectoryUrl + randomFile;
        };
        
        var deferred = $q.defer();
        
        $http.get(getRandomUrl())
          .success(function(data) {
            var content = window.atob(data.content);
            deferred.resolve(content);
          })
          .error(function() {
            deferred.reject("var createAssigner = function(keysFunc) {\n  return function(obj) {\n    var length = arguments.length;\n    if (length < 2 || obj == null) return obj;\n    for (var index = 0; index < length; index++) {\n      var source = arguments[index],\n          keys = keysFunc(source),\n          l = keys.length;\n      for (var i = 0; i < l; i++) {\n       var key = keys[i];\n        obj[key] = source[key];\n     }\n   }   return obj;\n  };\n};");
          });

        return deferred.promise;
      }


    }]);
})();
