var Promise = require('bluebird');
var join = Promise.join;
var fs = Promise.promisifyAll(require('fs'));

var fileTypeMap = {
  'js': 'Java Script',
  'py': 'Python',
  'rb': 'Ruby'
}

exports.seedExercisesAsync = function(directory) {
  fs.readdirAsync(directory).map(function(fileName) {
    var fileParts = fileName.split('.');
    var title = fileParts[0]
                  .replace('-', ' ')
                  .replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
    var language = fileTypeMap[fileParts[1]];

    var contents = fs.readFileAsync(directory + '/' + fileName, 'utf-8')
                      .catch(function ignore() {});
                      
    return join(contents, function(contents) {
      return {
        title: title,
        language: language,
        contents: contents
      };
    })
    
  }).then(function(array) {
    console.log(array);
  });
}