Gulp Template
=============

## A template for a modularised gulp installation

Inspired by an article entitled [Make your Gulp modular](https://makina-corpus.com/blog/metier/2015/make-your-gulp-modular), mixing elements of [Gulp Starter](https://github.com/vigetlabs/gulp-starter/blob/master/gulpfile.js/tasks/static.js) but using the [load-gulp-tasks](https://www.npmjs.com/package/load-gulp-tasks) package instead of `require-dir`, this template can be a good starting-point for gulp installations.

My reasons for choosing `load-gulp-tasks` over `require-dir` were mainly to avoid having repeated `require('gulp')` statements littering every task, since `gulp` is passed to each task in one solitary statement. I like `Gulp Starter`'s use of a `config.json` file, however, and this idea works well with `load-gulp-tasks`, which can also pass option parameters in its main statement, as well as passing any required plugins.

Speaking of plugins, `gulp-load-plugins` is passed, by default, to the task being called, which I find convenient, even though it may increase plugin overhead.
