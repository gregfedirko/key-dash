var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  development: {
    rootPath: rootPath,
    db: 'mongodb://localhost/multivision',
    port: process.env.PORT || 3030

  }, 
  production: {
    rootPath: rootPath,
    db: 'mongodb://gregfedirko:multiview@ds029051.mongolab.com:29051/heroku_app32684760',
    port: process.env.PORT || 80
  }
}