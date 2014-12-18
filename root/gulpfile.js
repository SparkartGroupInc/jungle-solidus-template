var browserify = require('browserify');
var concat = require('gulp-concat');
var filerevReplace = require('gulp-filerev-replace');
var fs   = require('fs');
var gulp = require('gulp');
var gutil = require('gulp-util');
var hbsfy = require('hbsfy');
var importCss = require('gulp-import-css');
var livereload = require('gulp-livereload');
var minifyCSS = require('gulp-minify-css');
var nodemon = require('gulp-nodemon');
var plumber = require('gulp-plumber');
var runSequence = require('run-sequence');
var solidus = require('solidus');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var uglifyify = require('uglifyify');

var yaml = require('js-yaml');
var site = yaml.safeLoad(fs.readFileSync('site.yml'));

//Task Groups (intended to be run from command line)
gulp.task('default', function(cb) { runSequence(
  'build',
  ['_start-solidus','_watch'],
cb);});

gulp.task('build', function(cb) { runSequence(
  '_browserify',
  '_concat',
cb);});

//Private Tasks (not intended to be run individually via the CLI)
gulp.task('_browserify', function(){
  return browserify({entries: ['./node_modules/jungle-solidus/scripts/index.js']})
  .transform(hbsfy)
  .transform(uglifyify)
  .bundle()
  .pipe(plumber({ errorHandler: logError }))
  .pipe(source('browserified-modules.js'))
  .pipe(gulp.dest('./assets/compiled/'));
});

gulp.task('_concat', function() {
  var allScripts = site.assets.scripts;
  allScripts.push('assets/compiled/browserified-modules.js');
  gulp.src(allScripts)
  .pipe(concat('scripts.js'))
  .pipe(gulp.dest('assets/compiled'))
});

gulp.task('_watch', function(){
  livereload.listen(livereloadPort);
  gulp.watch('./assets/**/*', function(e){
    livereload.changed(e.path, livereloadPort);
  });
});

gulp.task('_fingerprint', function(){
  gulp.src(['assets/**/*', '!assets/{scripts,styles}/**/*', 'views/**/*'], {base: process.cwd()})
  .pipe(plumber({ errorHandler: logError }))
  .pipe(filerevReplace({
    filerev: ['assets/**/*'],
    replace: ['assets/compiled/**/*', 'views/**/*'],
    base:    'assets'}))
  .pipe(gulp.dest(process.cwd()));
});

//Helper Functions
function logError(err) {
  gutil.beep();
  gutil.log(gutil.colors.red(err));
  this.emit('end');
}
