var gulp = require('gulp');

var uglify = require('gulp-uglify');
var concat = require('gulp-concat');


var stylus = require('gulp-stylus');

gulp.task('default', function() {

});

gulp.task('js', function() {
  return gulp.src('public/app/**/*.js')
      .pipe(uglify())
      .pipe(concat('app.js'))
      .pipe(gulp.dest('build'));
});

gulp.task('stylus', function() {
  console.log('compiling stylus');
  return gulp.src('public/css/*.styl')
      .pipe(stylus())
      .pipe(gulp.dest('public/css'));
});

gulp.task('watch', function() {
  gulp.watch('public/css/*.styl', ['stylus']);
});

