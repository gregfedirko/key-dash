_.find = _.detect = function(obj, predicate, context) {
  var result;
  predicate = _.iteratee(predicate, context);
  _.some(obj, function(value, index, list) {
    if (predicate(value, index, list)) {
      result = value;
      return true;
    }
  });
  return result;
};