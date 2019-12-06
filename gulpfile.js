const { src, dest, watch, series } = require('gulp');
var gulp = require('gulp');
var compass = require('gulp-compass');

// Compile SCSS files
function scss(cb) {
  cb();
  // Look in scss directory, compile to css
  return gulp.src(['scss/**/*.scss'])
		.pipe(compass({
			css: 'css',
			sass: 'scss',
		}))
		.pipe(gulp.dest('css'));
}

// Copy compiled css files to docs directory for site
function css(cb) {
  cb();
  return src('css/**/*.css')
    .pipe(dest('docs/css/'));
}

exports.default = function() {
  // Watch scss directory for changes
  watch('scss/**/*.scss', scss);
  // Watch css directory for changes
  watch('css/**/*.css', css);
}
