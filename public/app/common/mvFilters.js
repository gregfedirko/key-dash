(function() {
  angular
    .module('app')
    .filter('percentage', percentage);

    function percentage($filter) {
      return function(input, decimals) {
        if (!input) {
          return null
        }
        return $filter('number')(input * 100, decimals) + ' %';
      }
    }
})();

(function() {
  angular
    .module('app')
      .filter('formatTimer', formatTimer)

      function formatTimer() {
        return function(input)
          {
            function z(n) {return (n<10? '0' : '') + n;}
            var seconds = input % 60;
            var minutes = Math.floor(input / 60);
            var hours = Math.floor(minutes / 60);
            return (z(minutes)+':'+z(seconds));
          };
      }
})();