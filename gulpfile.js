'use strict';
const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean-css');

// sass.compiler = require('node-sass');



// gulp.task('sass', function () {
//     return gulp.src('./src/sass/**/*.scss')
//         .pipe(sass().on('error', sass.logError)).pipe(gulp.dest('./dist/css'));
// });

// CSS task
function css() {
    return gulp
        .src("./src/scss/**/*.scss")
        .pipe(sourcemaps.init())
        // .pipe(plumber())
        .pipe(sass({
            outputStyle: "expanded"
        }))
        // .pipe(gulp.dest("./dist/css/"))
        // .pipe(rename({
        //     suffix: ".min"
        // }))
        //   .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(clean())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("./dist/css/"))
    // .pipe(browsersync.stream());
}

const build = gulp.series(css);

gulp.task('watch', function () {
    return gulp.watch('./src/scss/**/*.scss', gulp.series('css'));
});

exports.css = css;