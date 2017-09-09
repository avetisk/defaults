/* global describe, it */

const defaults = require('../')
const assert = require('assert')

describe('defaults(o1, o2)', () => {
  const object = {
    x: {
      xx: 1,
      xz: 3,
    },
    func: () => 'Func your life!',
    z: 3,
    _: {
      x: undefined,
      y: {
        yx: 'Hari Bol !',
      },
    },
  }
  const result = defaults(
    object,
    {
      x: {
        xx: 3,
        xy: 2,
      },
      fn: () => 'Hell, I am a Function!',
      y: 2,
      z: {},
      _: {
        x: 123,
        y: {
          yx: 'Govinda Bol !',
          yy: 'Jay Sri Radhe !',
        },
      },
    },
    true
  )

  it('should not assign when value is undefined, but only when key not present', () => {
    assert(result.x.xx === 1)
    assert(result.x.xz === 3)
    assert(result.z === 3)
    assert(result._.y.yx === 'Hari Bol !')
    assert('x' in result._ && result._.x === undefined)
    assert(typeof result.fn === 'function')
    assert(result.x.xy === 2)
    assert(result.y === 2)
    assert(result._.y.yy === 'Jay Sri Radhe !')
  })

  it('should not mutate params', () => {
    assert(result !== object)
    assert(result._ !== object._)
  })
})
