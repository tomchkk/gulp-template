var task = require('../lib/task-name')(module.filename);
var del = require('del');

var excludeTask = function (value) {
  return value !== task;
};

var excludeNull = function (val) {
  return val !== null;
};

module.exports = function (gulp, options, $) {
  var config = options.config.tasks[task];

  gulp.task(task, config.deps || null, function () {
    // build an array of existing [task].dest values for each member of gulp.seq that isn't this task
    config.dest = gulp.seq.filter(excludeTask).map(function (task) {
      return options.config.tasks[task].dest || null;
    }).filter(excludeNull);
    return del.sync(config.dest, {read: false});
  });
};
