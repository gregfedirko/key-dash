_.each = _.forEach = function(obj, iteratee, context) {
  if (obj == null) return obj;
  iteratee = createCallback(iteratee, context);
  var i, length = obj.length;
  if (length === +length) {
    for (i = 0; i < length; i++) {
      iteratee(obj[i], i, obj);
    }
  } else {
    var keys = _.keys(obj);
    for (i = 0, length = keys.length; i < length; i++) {
      iteratee(obj[keys[i]], keys[i], obj);
    }
  }
  return obj;
};