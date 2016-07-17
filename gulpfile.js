var gulp       = require('gulp'),
    sass       = require('gulp-sass'),
    rename     = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps'),
    cleanCss   = require('gulp-clean-css');

var sassOptions = {
  includePaths: [
    'node_modules'
  ],
  precision: 6,
  sourceComments: false,
  outputStyle: 'expanded'
}

gulp.task('watch', function () {
  gulp.watch('scss/**/*.scss', ['sass']);
});

// Compiles and minifies Sass, includes a sourcemap for the minified stylesheet.
gulp.task('sass', function () {
  gulp.src('scss/draper.scss')
      .pipe(sass(sassOptions).on('error', sass.logError))
      .pipe(gulp.dest('dist/'))
      .pipe(rename({extname: '.min.css'}))
      .pipe(sourcemaps.init())
      .pipe(cleanCss())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('dist/'));
});
