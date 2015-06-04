var WriteJson = require("../lib");

WriteJson(__dirname + "/test.json", { "hello": "world" }, function (err, data) {
    console.log(err || "written");
});

WriteJson(__dirname + "/test.json", { "hello": "mars" });
