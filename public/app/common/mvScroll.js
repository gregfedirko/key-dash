(function() {
  angular
    .module('app')
    .directive("scroll", function ($window) {
      return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
          if (this.pageYOffset >= Number(attrs.triggerheight)) {
            scope.$eval(attrs.trigger);
           } 
          scope.$apply();
        });
      };
    });

})();