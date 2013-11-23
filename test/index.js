/*global describe, it*/

'use strict';

var defaults = require('../');
var assert = require('assert');

describe('defaults(dest, src)', function () {
  var dest = {
    'x': 1,
    'z': {
      'a': 11
    }
  };
  var result = defaults(dest, {
    'x': 2,
    'y': 2,
    'z': {
      'b': 22
    }
  });

  it('should not assign when property is already defined', function (done) {
    assert(result.x === 1);
    assert(result.z.a === 11);

    done();
  });

  it('should not assign recursively when property is undefined', function (done) {
    assert(result.z.b === undefined);

    done();
  });

  it('should assign when property is undefined', function (done) {
    assert(result.y === 2);

    done();
  });

  it('should return the original destination object', function (done) {
    assert(result === dest);

    done();
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

  it('should not assign when property is already defined', function (done) {
    assert(result.x.xx === 1);
    assert(result.x.xz === 3);
    assert(result.z === 3);
    assert(result._._y._yx === 'Hari Bol !');

    done();
  });

  it('should assign when property is undefined', function (done) {
    assert(result.x.xy === 2);
    assert(result.y === 2);
    assert(result._._y._yy === 'Jay Sri Radhe !');

    done();
  });

  it('should return the original destination object', function (done) {
    assert(result === dest);

    done();
  });
});
