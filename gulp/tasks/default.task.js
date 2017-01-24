var task = require('../lib/task-name')(module.filename);

module.exports = function (gulp, options, $) {
  var config = options.config.tasks[task];
  gulp.task(task, config.deps || null);
};
