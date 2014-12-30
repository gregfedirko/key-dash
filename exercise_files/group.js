var group = function(behavior) {
  return function(obj, iteratee, context) {
    var result = {};
    iteratee = _.iteratee(iteratee, context);
    _.each(obj, function(value, index) {
      var key = iteratee(value, index, obj);
      behavior(result, value, key);
    });
    return result;
  };
};