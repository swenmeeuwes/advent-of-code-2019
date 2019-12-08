var index = require('../index');
var assert = require('assert');

describe('Fuel computation from component masses', function() {
  describe('#computeFuelNeeded()', function() {
    it('should correctly compute fuel', function() {
      assert.equal(index.computeFuelNeeded([12, 14]), 4);
    });

    it('should correctly handle negative fuel values', function() {
      assert.equal(index.computeFuelNeeded([3, 1, 2, 5]), 0);
    });
  });
});