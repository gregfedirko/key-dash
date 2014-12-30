_.reduce = _.foldl = _.inject = function(obj, iteratee, memo, context) {
  if (obj == null) obj = [];
  iteratee = createCallback(iteratee, context, 4);
  var keys = obj.length !== +obj.length && _.keys(obj),
      length = (keys || obj).length,
      index = 0, currentKey;
  if (arguments.length < 3) {
    if (!length) throw new TypeError(reduceError);
    memo = obj[keys ? keys[index++] : index++];
  }
  for (; index < length; index++) {
    currentKey = keys ? keys[index] : index;
    memo = iteratee(memo, obj[currentKey], currentKey, obj);
  }
  return memo;
};