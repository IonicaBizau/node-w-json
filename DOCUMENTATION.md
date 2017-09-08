## Documentation

You can see below the API reference of this module.

### `wJson(path, data, options, callback)`
Writes a JSON file.

#### Params

- **String** `path`: The JSON file path.
- **Object** `data`: The JSON data to write in the provided file.
- **Object|Number|Boolean** `options`: An object containing the fields below. If boolean, it will be handled as `new_line`, if number it will be handled as `space`.

 - `space` (Number): An optional space value for beautifying the json output (default: `2`).
 - `new_line` (Boolean): If `true`, a new line character will be added at the end of the stringified content.
- **Function** `callback`: An optional callback. If not passed, the function will run in sync mode.

