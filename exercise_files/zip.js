_.zip = function(array) {
  if (array == null) return [];
  var length = _.max(arguments, 'length').length;
  var results = Array(length);
  for (var i = 0; i < length; i++) {
    results[i] = _.pluck(arguments, i);
  }
  return results;
};