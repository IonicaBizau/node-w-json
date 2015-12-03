# w-json [![Support this project][donate-now]][paypal-donations]

A small module to write JSON files.

If you want to read JSON files, check out [`r-json`](https://github.com/IonicaBizau/node-r-json).

## Installation

```sh
$ npm i --save w-json
```

## Example

```js
// Dependencies
var WriteJson = require("w-json");

// Write the same file synchronously
WriteJson(__dirname + "/test.json", { "hello": "mars" });

// 4 space indent and new line at the end
WriteJson(__dirname + "/test.json", { "hello": "mars" }, {
    new_line: true
  , space: 4
});

// Write test.json asynchronously
WriteJson(__dirname + "/test.json", { "hello": "world" }, function (err, data) {
    console.log(err || "written");
});
```

## Documentation

### `wJson(path, data, options, callback)`
Writes a JSON file.

#### Params
- **String** `path`: The JSON file path.
- **Object** `data`: The JSON data to write in the provided file.
- **Object|Number|Boolean** `options`: An object containing the fields below. If boolean, it will be handled as `new_line`, if number it will be handled as `space`.

 - `space` (Number): An optional space value for beautifying the json output (default: `2`).
 - `new_line` (Boolean): If `true`, a new line character will be added at the end of the stringified content.
- **Function** `callback`: An optional callback. If not passed, the function will run in sync mode.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`bible`](https://github.com/BibleJS/BibleApp)

 - [`birthday`](https://github.com/IonicaBizau/birthday)

 - [`blah`](https://github.com/IonicaBizau/blah)

 - [`cdnjs-importer`](https://github.com/cdnjs/cdnjs-importer)

 - [`engine-composition-crud`](https://github.com/IonicaBizau/engine-composition-crud#readme) by jillix

 - [`engine-parser`](https://github.com/IonicaBizau/engine-parser) by jillix

 - [`engine-tools`](https://github.com/jillix/engine-tools) by jillix

 - [`git-stats`](https://github.com/IonicaBizau/git-stats)

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md