var task = require('../lib/task-name')(module.filename);

module.exports = function (gulp, options, $) {
  var config = options.config.tasks[task];

  gulp.task(task, config.deps || null, function () {
    console.log('Hello, World!');
    console.log('gulp.dest: \'%s\'', config.dest);

    return gulp.src(config.src)
      .pipe($.debug())
      .pipe(gulp.dest(config.dest));
  });
};
