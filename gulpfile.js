const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean-css');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const zip = require('gulp-zip');
const concat = require('gulp-concat');

// Compile SASS
function css() {
  return gulp
    .src('./src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'expanded',
    }))
    .pipe(autoprefixer({
      cascade: false,
    }))
    .pipe(clean())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/assets/css/'));
}

// Build JS
function buildJS() {
  return gulp
    .src('./dist/assets/js/*.js')
    .pipe(babel({
      presets: ['@babel/preset-env'],
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/assets/js/min'));
}

// Concat JS
function concatJS() {
  return gulp
    .src('./dist/assets/js/min/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./smart-a-ghost-theme-for-academics/assets/js/'));
}

// Build CSS
function buildCSS() {
  return gulp
    .src('./src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed',
    }))
    .pipe(autoprefixer({
      cascade: false,
    }))
    .pipe(clean())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./smart-a-ghost-theme-for-academics/assets/css'));
}

// Build HBS
function buildHBS() {
  return gulp
    .src('./dist/*.hbs')
    .pipe(gulp.dest('./smart-a-ghost-theme-for-academics/'));
}

// Build Partials
function buildPartials() {
  return gulp
    .src('./dist/partials/*.hbs')
    .pipe(gulp.dest('./smart-a-ghost-theme-for-academics/partials/'));
}

// Zip files
function zipFiles() {
  return gulp
    .src('./smart-a-ghost-theme-for-academics/**/*')
    .pipe(zip('default.zip'))
    .pipe(gulp.dest('./upload/'));
}

gulp.task('watch', () => gulp.watch('./src/scss/**/*.scss', gulp.series('css')));

gulp.task('build', gulp.series(buildJS, concatJS, buildCSS, buildHBS, buildPartials, zipFiles));

exports.css = css;
exports.buildJS = buildJS;
exports.concatJS = concatJS;
exports.buildCSS = buildCSS;
exports.buildHBS = buildHBS;
exports.buildPartials = buildPartials;
exports.zipFiles = zipFiles;
