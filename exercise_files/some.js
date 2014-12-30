_.some = _.any = function(obj, predicate, context) {
  if (obj == null) return false;
  predicate = _.iteratee(predicate, context);
  var keys = obj.length !== +obj.length && _.keys(obj),
      length = (keys || obj).length,
      index, currentKey;
  for (index = 0; index < length; index++) {
    currentKey = keys ? keys[index] : index;
    if (predicate(obj[currentKey], currentKey, obj)) return true;
  }
  return false;
};