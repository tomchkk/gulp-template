var del = require('del');
var task = require('../lib/task-name')(module.filename);

const PATH = require('path');
const GLOB = '**/*';

module.exports = function (gulp, options, $) {
  var config = options.config.tasks[task];

  gulp.task(task, config.deps || null, function () {
    // clean directories configured in 'dest' property of each task in the gulp sequence
    var delPaths = getUniquePaths(gulp.seq, options.config.tasks, GLOB);
    return del.sync(delPaths, {read: false});
  });
};

/**
 * Get a unique array of existing [task].dest values for each memeber of 'seq' that
 * isn't this task.
 * @param  {Array}  seq   A gulp sequence (gulp.seq) array
 * @param  {Object} tasks An object containing defined gulp tasks
 * @param  {String} glob  A globbing pattern, to append to the 'dest' value
 * @return {Array}        An array of unique task 'dest' values
 */
function getUniquePaths (seq, tasks, glob) {
  var excludeTask = function (value) {
    return value !== task;
  };

  var excludeNull = function (val) {
    return val !== null;
  };

  var excludeCWD = function (dest) {
    return dest !== './';
  };

  return Array.from(new Set(
    seq.filter(excludeTask)
      .map(function (t) {
        return tasks[t].dest || null;
      })
      .filter(excludeNull)
      .filter(excludeCWD)
      .map(function (p) {
        // add globbing pattern to each path
        return PATH.join(p, glob);
      })
  ));
}
