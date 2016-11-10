var gulp = require('gulp');
var config = require('./gulp/config.json');
var pattern = config.tasks._glob;

require('load-gulp-tasks')(gulp, {pattern: pattern, config: config});

gulp.task('default', ['build']);
