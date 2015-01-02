var gulp = require('gulp');
var stylus = require('gulp-stylus');

gulp.task('default', function() {

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

