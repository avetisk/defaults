/*global describe, it*/

'use strict';

var defaults = require('../');
var assert = require('assert');

describe('defaults(dest, src)', function () {
  var dest = {
    'x': 1,
    'z': 3
  };
  var result = defaults(dest, {
    'x': 2,
    'y': 2,
    'z': 2
  });

  it('should not assign when property is already defined', function () {
    assert(result.x === 1);
    assert(result.z === 3);
  });

  it('should assign when property is undefined', function () {
    assert(result.y === 2);
  });

  it('should return the original destination object', function () {
    assert(result === dest);
  });
});

describe('defaults(dest, src, true)', function () {
  var dest = {
    'x': {
      'xx': 1,
      'xz': 3
    },
    'z': 3,
    '_': {
      '_x': 1,
      '_y': {
        '_yx': 'Hari Bol !'
      }
    }
  };
  var result = defaults(dest, {
    'x': {
      'xx': 3,
      'xy': 2
    },
    'y': 2,
    'z': {},
    '_': {
      '_y': {
        '_yx': 'Govinda Bol !',
        '_yy': 'Jay Sri Radhe !'
      }
    }
  }, true);

  it('should not assign when property is already defined', function () {
    assert(result.x.xx === 1);
    assert(result.x.xz === 3);
    assert(result.z === 3);
    assert(result._._y._yx === 'Hari Bol !');
  });

  it('should assign when property is undefined', function () {
    assert(result.x.xy === 2);
    assert(result.y === 2);
    assert(result._._y._yy === 'Jay Sri Radhe !');
  });

  it('should return the original destination object', function () {
    assert(result === dest);
  });
});
