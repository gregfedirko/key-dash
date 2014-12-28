var mongoose = require('mongoose');
var User = mongoose.model('User');
var encrypt = require('../utilities/encryption');

exports.getUsers = function(req, res) {
  User.find({}).exec(function(err, collection) {
    res.send(collection);
  });
}

exports.createUser = function(req, res, next) {
  var userData = req.body;
  userData.username = userData.username.toString().toLowerCase();
  userData.salt = encrypt.createSalt();
  userData.hashed_pwd = encrypt.hashPwd(userData.salt, userData.password);
  User.create(userData, function(error, user) {
    if(error) {
      if (error.toString().indexOf('E11000') > -1) {
        error = new Error('Duplicate UserName');
      }

      res.status(400);
      return res.send({reason: error.toString()});
    }

    req.logIn(user, function(error) {
      if (error) {
        return next(error);
      }

      res.send(user);
    })
  });
}

exports.updateUser = function(req, res) {
  var userUpdates = req.body;
  if (req.user._id != userUpdates._id && !req.user.hasRole('admin')) {
    res.status(403);
    res.end();
  }

  req.user.firstName = userUpdates.firstName;
  req.user.lastName = userUpdates.lastName;
  req.user.username = userUpdates.username;
  if (userUpdates.password && userUpdates.password.length > 0) {
    req.user.salt = encrypt.createSalt();
    req.user.hashed_pwd = encrypt.hashPwd(req.user.salt, userUpdates.password);
  }

  req.user.save(function(err) {
    if (err) {
      res.status(400);
      return res.send({reason: err.toString()});
    }
    res.send(req.user);
  });
}


exports.addScore = function(req, res) {
  console.log(req.body.score);
  console.log(req.user);
  var newScore = req.body.score;
  User.findById(req.user._id, function(error, user) {
    if (!error) {
      user.scores.push(newScore);
      user.save();
      res.end();
    }
  });
};

exports.getScores = function(req, res) {
  User.findById(req.user._id, function(error, user) {
    if (!error) {
      res.send(user.scores);
    }
  })
}








