/**
 * Merge default values.
 *
 * @param {Array<Object>} src source object(s)
 * @return {Object}
 */
const defaults = (...objects) =>
  objects.reduce(
    (result, object) =>
      Object.entries(object).reduce(
        (entry, [key, value]) =>
          entry[key] instanceof Object && value instanceof Object
            ? { ...entry, [key]: defaults(entry[key], value) }
            : { [key]: value, ...entry },
        result
      ),
    {}
  )

module.exports = defaults
