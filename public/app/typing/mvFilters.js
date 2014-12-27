(function() {
  angular
    .module('app')
    .filter('percentage', ['$filter', function($filter) {
      return function(input, decimals) {
        if (!input) {
          return null
        }
        return $filter('number')(input * 100, decimals) + ' %';
      }
    }]);
})();