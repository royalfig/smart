const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean-css');
const gulpStylelint = require('gulp-stylelint');

// CSS task
function css() {
  return gulp
    .src('./src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'expanded',
    }))
    .pipe(gulpStylelint({
      reporters: [
        { formatter: 'string', console: true },
        { fix: true },
      ],
    }))
    .pipe(autoprefixer({
      cascade: false,
    }))
    .pipe(clean())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/css/'));
}

gulp.task('watch', () => gulp.watch('./src/scss/**/*.scss', gulp.series('css')));

exports.css = css;
