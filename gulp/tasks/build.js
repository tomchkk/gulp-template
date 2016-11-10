module.exports = function (gulp, options, $) {
  gulp.task('build', function () {
    console.log('These are your options: ', options);
    return gulp.src('./src/**/*.js')
      .pipe($.debug());
  });
};
