'use strict';

/**
 * Merge default values.
 *
 * @param {Object} dest destination object
 * @param {Object} src source object
 * @param {Boolean} recursive merge into destination recursively (default: false)
 * @return {Object} dest object
 */
var defaults = function (dest, src, recursive) {
  for (var prop in src) {
    if (! src.hasOwnProperty(prop)) {
      continue;
    }

    if (recursive && dest[prop] instanceof Object && src[prop] instanceof Object) {
      dest[prop] = defaults(dest[prop], src[prop], true);
    } else if (! (prop in dest)) {
      dest[prop] = src[prop];
    }
  }

  return dest;
};

/**
 * Expose `defaults`.
 */
module.exports = defaults;
