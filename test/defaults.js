var defaults = require('../');
var assert = require('assert');

function getObj() {
  return {
    'x': 1,
    'z': 3
  };
};

describe('defaults', function () {
  var obj = getObj();
  var result = defaults(obj, {'x': 2, 'y': 2, 'z': 2});

  it('should not assign when property is already defined', function () {
    assert(result.x === 1);
    assert(result.z === 3);
  });

  it('should assign when property is undefined', function () {
    assert(result.y === 2);
  });

  it('should return the original destination object', function () {
    assert(result === obj);
  });
});
