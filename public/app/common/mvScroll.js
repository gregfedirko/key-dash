(function() {
  'use strict';
  angular
    .module('app')
    .directive("scroll", scroll);
     
    function scroll($window) {
      return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
          if (this.pageYOffset >= Number(attrs.triggerheight)) {
            scope.$eval(attrs.trigger);
           } 
          scope.$apply();
        });
      };
    }

})();