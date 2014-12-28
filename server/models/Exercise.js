var mongoose = require('mongoose');

var exerciseSchema = mongoose.Schema({
  title: {type: String},
  language: {type: String},
  lines: {type: Number},
  content: {type: String},
});

var Exercise = mongoose.model('Exercise', exerciseSchema);

function createDefaultExercises() {
  var newExercise = {
    title: "Default function",
    language: "JavaScript",
    lines: 8,
    content: "var createAssigner = function(keysFunc) {\n  return function(obj) {\n    var length = arguments.length;\n    if (length < 2 || obj == null) return obj;\n    for (var index = 0; index < length; index++) {\n      var source = arguments[index],\n          keys = keysFunc(source),\n          l = keys.length;\n      for (var i = 0; i < l; i++) {\n       var key = keys[i];\n        obj[key] = source[key];\n     }\n   }   return obj;\n  };\n};"
  }

  Exercise.find({}).exec(function(error, collection) {
    if (collection.length === 0) {
      Exercise.create(newExercise);
    }
  });
}


exports.createDefaultExercises = createDefaultExercises;







