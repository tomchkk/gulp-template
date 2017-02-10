var gulp = require('gulp');
var argv = require('yargs').argv;
var config = require('./gulp/lib/get-config')(argv);

var taskGlob = config.src;

var options = {
  pattern: taskGlob,
  config: config
};

require('load-gulp-tasks')(gulp, options);

gulp.task('default', ['build']);
