var mongoose = require('mongoose');
var Exercise = mongoose.model('Exercise');

exports.getExercises = function(req, res) {
  Exercise.find({}).exec(function(error, collection) {
    res.send(collection);
  });
};

exports.getExerciseById = function(req, res) {
  Exercise.findOne({_id: req.params.id}).exec(function(err, exercise) {
    res.send(exercise);
  });
}