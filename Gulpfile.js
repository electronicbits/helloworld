var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('js', function(){
    gulp.src('assets/src/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(gulp.dest('assets/js'));
  });