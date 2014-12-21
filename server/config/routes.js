var auth = require('./auth');
var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = function(app) {

  app.get('/api/users', auth.requiresRole('admin'), function(req, res) {
    console.log("############## api/users");
    User.find({}).exec(function(err, collection) {
      res.send(collection);
    });
  });


  app.get('/partials/*', function(req, res) {
    res.render('../../public/app/' + req.params[0]);
  });

  app.post('/login', auth.authenticate);

  app.post('/logout', function(req, res) {
    req.logout();
    res.end();
  });

  app.get('*', function(req, res) {
    console.log("########### index")
    res.render('index', {
      bootstrappedUser: req.user
    });
  });
}