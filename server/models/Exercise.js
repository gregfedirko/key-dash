var mongoose = require('mongoose');
var Promise = require('bluebird');
var join = Promise.join;
var fs = Promise.promisifyAll(require('fs'));
var path = require('path');
var exerciseSchema = mongoose.Schema({
  title: {type: String},
  language: {type: String},
  content: {type: String}
});

var Exercise = mongoose.model('Exercise', exerciseSchema);

function createDefaultExercises() {
  Exercise.find({}).exec(function(error, collection) {
    if (collection.length === 0) {


      var fileTypeMap = {
        'js': 'Java Script',
        'py': 'Python',
        'rb': 'Ruby'
      }
      var directory = './exercise_files';
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
            content: contents
          };
        })
        
      }).then(function(exerciseObjectArray) {

        for (var i = 0; i < exerciseObjectArray.length; i++) {
          Exercise.create(exerciseObjectArray[i]);
        }
        
      });
      
    }
  });
  
}

exports.createDefaultExercises = createDefaultExercises;







