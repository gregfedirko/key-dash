var flatten = function(input, shallow, strict, output) {
  if (shallow && _.every(input, _.isArray)) {
    return concat.apply(output, input);
  }
  for (var i = 0, length = input.length; i < length; i++) {
    var value = input[i];
    if (!_.isArray(value) && !_.isArguments(value)) {
      if (!strict) output.push(value);
    } else if (shallow) {
      push.apply(output, value);
    } else {
      flatten(value, shallow, strict, output);
    }
  }
  return output;
};