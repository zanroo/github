var assert = require('assert');
var process = require('../lib/process.js').Process;
describe('Process', function() {
  describe('#test()', function () {
    it('it should return true', function () {
      assert.equal(true, process.test());
    });
  });
});
