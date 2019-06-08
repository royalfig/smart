'use strict';  const gulp = require('gulp'); const sass = require('gulp-sass');    sass.compiler = require('node-sass');  gulp.task('sass', function () {     return gulp.src('./src/sass/**/*.scss')         
.pipe(sass().on('error', sass.logError))         .pipe(gulp.dest('./public/css')); });  gulp.task('watch', function () {     return gulp.watch('./src/sass/**/*.scss', gulp.series('sass')); });
