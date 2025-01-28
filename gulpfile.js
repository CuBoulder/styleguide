const { src, dest, watch, series } = require('gulp');
var gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));


function buildStyles() {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
};

function copyCSS() {
  return gulp.src('./css/**/*.css')
    .pipe(dest('docs/css/'));
}



exports.buildStyles = buildStyles;
exports.copyCSS = copyCSS;
exports.default = function () {
  gulp.watch('./scss/**/*.scss', gulp.series('buildStyles'));
  gulp.watch('./css/**/*.css', gulp.series('copyCSS'));
};


