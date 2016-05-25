
# w-json

 [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/w-json.svg)](https://www.npmjs.com/package/w-json) [![Downloads](https://img.shields.io/npm/dt/w-json.svg)](https://www.npmjs.com/package/w-json) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> A small module to write JSON files.

If you want to read JSON files, check out [`r-json`](https://github.com/IonicaBizau/node-r-json).

## :cloud: Installation

```sh
$ npm i --save w-json
```


## :clipboard: Example



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

## :memo: Documentation


### `wJson(path, data, options, callback)`
Writes a JSON file.

#### Params
- **String** `path`: The JSON file path.
- **Object** `data`: The JSON data to write in the provided file.
- **Object|Number|Boolean** `options`: An object containing the fields below. If boolean, it will be handled as `new_line`, if number it will be handled as `space`.

 - `space` (Number): An optional space value for beautifying the json output (default: `2`).
 - `new_line` (Boolean): If `true`, a new line character will be added at the end of the stringified content.
- **Function** `callback`: An optional callback. If not passed, the function will run in sync mode.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`babel-it`](https://github.com/IonicaBizau/babel-it#readme)—Babelify your code before `npm publish`.
 - [`bible`](https://github.com/BibleJS/BibleApp)—Read the Holy Bible via the command line.
 - [`birthday`](https://github.com/IonicaBizau/birthday)—Know when a friend's birthday is coming.
 - [`blah`](https://github.com/IonicaBizau/blah)—A command line tool to optimize the repetitive actions.
 - [`cdnjs-importer`](https://github.com/cdnjs/cdnjs-importer)—Easy way to import a library into CDNJS.
 - [`cli-sunset`](https://github.com/IonicaBizau/cli-sunset)—A fancy command line tool for knowing the sunset time.
 - [`engine-app`](https://github.com/jillix/engine-app#readme) (by jillix)—Engine app related helper functions.
 - [`engine-composition-crud`](https://github.com/jillix/engine-composition-crud#readme) (by jillix)—The default module for creating, reading, updating and deleting Engine instances.
 - [`engine-parser`](https://github.com/IonicaBizau/engine-parser) (by jillix)—Engine composition parser.
 - [`engine-tools`](https://github.com/jillix/engine-tools) (by jillix)—Engine Tools library and CLI app.
 - [`git-stats`](https://github.com/IonicaBizau/git-stats)—Local git statistics including GitHub-like contributions calendars.
 - [`idea`](https://github.com/IonicaBizau/idea)—A lightweight CLI tool and module for keeping ideas in a safe place quick and easy.
 - [`packy`](https://github.com/IonicaBizau/packy#readme)—Set default fields in your package.json files.
 - [`ship-release`](https://github.com/IonicaBizau/ship-release#readme)—Publish new versions on GitHub and npm with ease.
 - [`tithe`](https://github.com/IonicaBizau/tithe)—Organize and track the tithe payments.
 - [`w-package-json`](https://github.com/IonicaBizau/w-package-json#readme)—Write package.json files.
 - [`web-term`](https://github.com/IonicaBizau/web-term)—A full screen terminal in your browser.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
