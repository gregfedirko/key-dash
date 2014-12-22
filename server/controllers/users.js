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