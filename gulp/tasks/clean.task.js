var del = require('del');
var task = require('../lib/task-name')(module.filename);

module.exports = function (gulp, options, $) {
  var config = options.config.tasks[task];

  gulp.task(task, config.deps || null, function () {
    // clean 'dest' directories for each configured task
    config.dest = getUniqueDest(gulp.seq, options.config.tasks);
    return del.sync(config.dest, {read: false});
  });
};

/**
 * Get a unique array of existing [task].dest values for each memeber of 'seq' that
 * isn't this task.
 * @param  {Array}  seq   A gulp sequence (gulp.seq) array
 * @param  {Object} tasks An object containing defined gulp tasks
 * @return {Array}        An array of unique task 'dest' values
 */
function getUniqueDest (seq, tasks) {
  return Array.from(new Set(
    seq.filter(excludeTask)
      .map(function (t) {
        return tasks[t].dest || null;
      })
      .filter(excludeNull)
      .filter(excludeCWD)
  ));
}

var excludeTask = function (value) {
  return value !== task;
};

var excludeNull = function (val) {
  return val !== null;
};

var excludeCWD = function (dest) {
  return dest !== './';
};
