var gulp = require('gulp');

var ngAnnotate = require('gulp-ng-annotate');
var streamqueue = require('streamqueue');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');


var stylus = require('gulp-stylus');

gulp.task('default', function() {

});

gulp.task('js', function() {

  var paths = [
    "public/vendor/lodash/dist/lodash.js",
    "public/vendor/jquery/dist/jquery.js",
    "public/vendor/angular/angular.js",
    "public/vendor/Chart.js/Chart.js",
    "public/vendor/angular-chart.js/dist/angular-chart.js",
    "public/vendor/toastr/toastr.js",
    "public/vendor/angular-resource/angular-resource.js",
    "public/vendor/angular-route/angular-route.js",
    "public/vendor/angular-scroll/angular-scroll.js",
    "public/vendor/bootstrap/dist/js/bootstrap.js",
    'public/app/**/*.js'
  ];
  return gulp.src(paths)
      .pipe(concat('app.js'))
      .pipe(ngAnnotate())
      .pipe(uglify())
      .pipe(gulp.dest('public/build'));
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

