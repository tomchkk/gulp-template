var assert = require('assert');
var taskName = require('../');

describe('#taskName()', function () {
  it("should return the name portion of a task given a '[name].task.js' file", function () {
    var task = taskName('gulp/tasks/foo-bar.task.js');
    assert.equal(task, 'foo-bar');
  });
});
