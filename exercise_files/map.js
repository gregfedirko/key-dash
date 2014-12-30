_.map = _.collect = function(obj, iteratee, context) {
  if (obj == null) return [];
  iteratee = _.iteratee(iteratee, context);
  var keys = obj.length !== +obj.length && _.keys(obj),
      length = (keys || obj).length,
      results = Array(length),
      currentKey;
  for (var index = 0; index < length; index++) {
    currentKey = keys ? keys[index] : index;
    results[index] = iteratee(obj[currentKey], currentKey, obj);
  }
  return results;
};