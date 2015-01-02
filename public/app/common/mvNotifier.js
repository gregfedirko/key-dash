(function() {
  'use strict';
  angular
    .module('app')
    .value('mvToastr', toastr);

  angular
    .module('app')
    .factory('mvNotifier', mvNotifier);
    function mvNotifier(mvToastr) {
      return {
        notify: function(msg) {
          mvToastr.success(msg);
        }, 
        error: function(msg) {
          mvToastr.error(msg);
        }
      }
    }
})();