// Dependencies
var WriteJson = require("../lib");

// Write test.json asynchronously
WriteJson(__dirname + "/test.json", { "hello": "world" }, function (err, data) {
    console.log(err || "written");
});

// Write the same file synchronously
WriteJson(__dirname + "/test.json", { "hello": "mars" });
