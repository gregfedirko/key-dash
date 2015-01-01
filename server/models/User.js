var mongoose = require('mongoose');
var encrypt = require('../utilities/encryption');

var scoreSchema = mongoose.Schema({
  wpm: Number,
  errorPercentage: {type: Number, default: 0},
  wastedKeyStrokes: {type: Number, default: 0},
  date: { type: Date, default: Date.now }
});

var userSchema = mongoose.Schema({
  firstName: {type: String, required: '{PATH} is required'}, 
  lastName: {type: String, required: '{PATH} is required'}, 
  username: {
    type: String,
    required: '{PATH} is required',
    unique: true
  },
  salt: {type: String, required: '{PATH} is required'}, 
  hashed_pwd: {type: String, required: '{PATH} is required'},
  roles: [String],
  scores: [scoreSchema]
});

userSchema.methods = {
  authenticate: function(passwordToMatch) {
    return encrypt.hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
  },
  hasRole: function(role) {
    return this.role.indexOf(role) > -1;
  }
}

var User = mongoose.model('User', userSchema);

function createDefaultUsers() {
  User.find({}).exec(function(err, collection) {
    if (collection.length === 0) {
      var salt, hash;
      salt = encrypt.createSalt();
      hash = encrypt.hashPwd(salt, 'test')
      User.create({
        firstName: 'Test', 
        lastName: 'Test', 
        username: 'test', 
        salt: salt, 
        hashed_pwd: hash,
        roles: ['admin']
      });
    }
  });  
}

exports.createDefaultUsers = createDefaultUsers;

