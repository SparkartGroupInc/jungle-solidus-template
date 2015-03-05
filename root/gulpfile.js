var gulp = require('gulp');

// Require Shared Tasks
var requireDir = require('require-dir');
var broadwayTasks = requireDir('./node_modules/broadway/tasks/', { recurse: true });
var jungleTasks = requireDir('./node_modules/jungle-solidus/tasks/', { recurse: true });

// Require Site Config
var fs = require('fs');
var yaml = require('js-yaml');
var site = yaml.safeLoad(fs.readFileSync('site.yml'));

// If assets haven't been defined in site.yml, set an empty array so site can start
var siteScripts = site.scripts && site.scripts.default ? site.scripts.default  : [];
var siteStyles = site.styles && site.styles.default ? site.styles.default : [];

siteScripts.forEach(jungleTasks.addFullPaths);
siteStyles.forEach(jungleTasks.addFullPaths);

// Site Specific Tasks
gulp.task('default', ['build', 'watch']);
gulp.task('build', ['_compile-js', '_compile-css']);
gulp.task('predeploy', ['_fingerprint']);
gulp.task('watch', function(){
  broadwayTasks.watch('./assets/**/*');
});

// Shared Tasks
//   These should only define the source, filename and destination, and handle errors.
//   The tasks themselves should come from broadway (or jungle-solidus) for consistency.
gulp.task('_compile-js', function(){
  return gulp.src(siteScripts)
    .pipe(jungleTasks.compileJs('scripts.js'))
    .on('error', broadwayTasks.handleErrors)
    .pipe(gulp.dest('./assets/compiled/'));
});

gulp.task('_compile-css', function() {
  return gulp.src(siteStyles)
    .pipe(jungleTasks.compileCss('styles.css'))
    .on('error', broadwayTasks.handleErrors)
    .pipe(gulp.dest('assets/compiled/'))
});

gulp.task('_fingerprint', function(){
  return gulp.src(['assets/**/*', '!assets/{scripts,styles}/**/*', 'views/**/*'], {base: process.cwd()})
    .pipe(broadwayTasks.fingerprint())
    .on('error', broadwayTasks.handleErrors)
    .pipe(gulp.dest(process.cwd()));
});
