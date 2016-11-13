var print = require('../lib/printMsg');

module.exports = function (gulp, options, $) {
  gulp.task('build', function () {
    // console.log('These are your options: ', options);
    print('Hello world!');
    return gulp.src('./src/**/*.js')
      .pipe($.debug());
  });
};
