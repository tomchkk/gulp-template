var task = require('../lib/task-name')(module.filename);

module.exports = function (gulp, options, $) {
  var config = options.config.tasks[task];

  gulp.task(task, config.deps || null, function () {
    // get an array of watch tasks and, for each task use their src as watch's src
    config.tasks.forEach(function (watchTask) {
      gulp.watch(options.config.tasks[watchTask].src, [watchTask]);
    });
  });
};
