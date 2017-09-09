[![Build Status](https://secure.travis-ci.org/avetisk/defaults.png?branch=master)](http://travis-ci.org/avetisk/defaults)

# defaults

  Merge recursively objects into a new one, only if prop's key is not already defined.

## Installation

`$ yarn add stluafed`

## API

`defaults(...objects)`

```javascript
defaults(
  {
    x: 1,
    z: {
      a: 11
    }
  },
  {
    x: 2,
    y: 2,
    z: {
      a: 'trololol',
      b: 22
    }
  },
  true
);
// > {x: 1, y: 2, z: {a: 11, b: 22}}
```

## License
MIT
