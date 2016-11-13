var assert = require('assert');
var print = require('../printMsg');

describe('printMsg', function () {
  it('prints a given string', function () {
    var msg = print('this is a test');
    assert.equal(msg, 'this is a test');
  });
});
