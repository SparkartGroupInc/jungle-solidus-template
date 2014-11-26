var argv = require('minimist')(process.argv);
var concat = require('gulp-concat');
var filerevReplace = require('gulp-filerev-replace');
var gulp = require('gulp');
var gutil = require('gulp-util');
var importCss = require('gulp-import-css');
var livereload = require('gulp-livereload');
var minifyCSS = require('gulp-minify-css');
var nodemon = require('gulp-nodemon');
var plumber = require('gulp-plumber');
var runSequence = require('run-sequence');
var solidus = require('solidus');
var uglify = require('gulp-uglify');

var solidusPort = argv.port || argv.p || process.env.PORT || 8080;
var livereloadPort = parseFloat(process.env.npm_config_livereloadport) || 35729;
var logserverPort = argv.logserverport || 8081;
var logLevel = argv.loglevel || argv.l || 3;
var logserverLevel = argv.logserverlevel;

//Task Groups (intended to be run from command line)
gulp.task('default', function(cb) { runSequence(
  'build',
  ['_start-solidus','_watch'],
cb);});
gulp.task('build', ['_move-common-assets']);

//Private Tasks (not intended to be run individually)
gulp.task('_move-common-assets', function(){
  return gulp.src(['node_modules/jungle-solidus/common_assets/**'])
  .pipe(gulp.dest('assets/common'));
});

gulp.task('_start-solidus', function(){
  nodemon({
    script: 'start.js',
    ext: 'hbs',
    env: {
      DEV: true,
      PORT: solidusPort,
      LIVERELOAD_PORT: livereloadPort,
      LOG_SERVER_PORT: logserverPort,
      LOG_LEVEL: logLevel,
      LOG_SERVER_LEVEL: logserverLevel
    }
  });
});

gulp.task('_watch', function(){
  livereload.listen(livereloadPort);
  gulp.watch('./assets/**/*', function(e){
    livereload.changed(e.path, livereloadPort);
  });
});

//Helper Functions
function logError(err) {
  gutil.beep();
  gutil.log(gutil.colors.red(err));
  this.emit('end');
}