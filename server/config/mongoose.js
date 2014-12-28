var mongoose = require('mongoose');
var userModel = require('../models/User.js');
var exerciseModel = require('../models/Exercise.js');

module.exports = function(config) {
  mongoose.connect(config.db);

  var db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error...'));
  db.once('open', function callback() {
    console.log('multivision db opened');
  });

  userModel.createDefaultUsers();
  exerciseModel.createDefaultExercises();

};
