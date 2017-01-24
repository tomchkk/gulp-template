var task = require('../lib/task-name')(module.filename);
var print = require('../lib/printMsg');

module.exports = function (gulp, options, $) {
  var config = options.config.tasks[task];

  gulp.task(task, config.deps || null, function () {
    // console.log('These are your options: ', options);
    print('Hello world!');
    return gulp.src('./src/**/*.js')
      .pipe($.debug());
  });
};
