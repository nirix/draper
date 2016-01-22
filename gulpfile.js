var gulp  = require('gulp'),
    watch = require('gulp-watch'),
    sass  = require('gulp-sass');

var sassPaths = [
  'node_modules'
];

gulp.task('watch', function () {
  watch('scss/**/*.scss', function () {
    gulp.run('sass');
  });
});

gulp.task('sass', function () {
  gulp.src('scss/draper.scss')
      .pipe(sass({includePaths: sassPaths}).on('error', sass.logError))
      .pipe(gulp.dest('dist/'));
});
