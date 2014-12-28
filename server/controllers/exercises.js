var mongoose = require('mongoose');
var Exercise = mongoose.model('Exercise');

exports.getExercises = function(req, res) {
  Exercise.find({}).exec(function(error, collection) {
    res.send(collection);
  });
};