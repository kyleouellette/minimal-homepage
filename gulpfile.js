var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', ['sass'], function(){});

gulp.task('sass', [], function(){
   return gulp.src('_scss/**/*')
      .pipe(sass())
      .pipe(gulp.dest('_css/'))
});

gulp.task('watch', [], function(){
   gulp.watch('_scss/**/*', ['sass']);
});