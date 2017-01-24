var gulp = require('gulp');
var config = require('./gulp/config.json');

var taskGlob = config.src;

var options = {
  pattern: taskGlob,
  config: config
};

require('load-gulp-tasks')(gulp, options);

gulp.task('default', ['build']);
