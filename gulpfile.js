var gulp  = require('gulp'),
    sass  = require('gulp-sass');

var sassPaths = [
  'node_modules'
];

gulp.task('watch', function () {
  gulp.watch('scss/**/*.scss', ['sass']);
});

gulp.task('sass', function () {
  gulp.src('scss/draper.scss')
      .pipe(sass({includePaths: sassPaths}).on('error', sass.logError))
      .pipe(gulp.dest('dist/'));
});
