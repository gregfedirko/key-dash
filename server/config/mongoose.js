var mongoose = require('mongoose');
var userModel = require('../models/User.js');
var exerciseModel = require('../models/Exercise.js');
var path = require('path');

module.exports = function(config) {
  mongoose.connect(config.db);

  var db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error...'));
  db.once('open', function callback() {
    console.log('MongoDB opened');
  });

  userModel.createDefaultUsers();
  exerciseModel.createDefaultExercises();

};
