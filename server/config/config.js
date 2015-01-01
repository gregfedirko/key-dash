var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

var MONGO_URI = process.env.MONGO_URI;

module.exports = {
  development: {
    rootPath: rootPath,
    db: 'mongodb://localhost/keydash',
    port: process.env.PORT || 3030

  }, 
  production: {
    rootPath: rootPath,
    db: MONGO_URI,
    port: process.env.PORT || 80
  }
}
