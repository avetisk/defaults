[![Build Status](https://secure.travis-ci.org/avetisk/defaults.png?branch=master)](http://travis-ci.org/avetisk/defaults)

# defaults

  Assigns enumerable properties of the default object(s) to the destination object for all destination properties that resolve to undefined.

## Installation

`$ component install avetisk/defaults`

## API

### defaults(obj1, obj2)

```javascript
defaults({'x': 1}, {'x': 2, 'y': 2});
// > {'x': 1, 'y': 2}
```

## License

  MIT
