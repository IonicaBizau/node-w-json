// Dependencies
var Fs = require("fs");

/**
 * wJson
 * Writes a JSON file.
 *
 * @name wJson
 * @function
 * @param {String} path The JSON file path.
 * @param {Object} data The JSON data to write in the provided file.
 * @param {Number} space An optional space value for beautifying the json output (default: `2`)
 * @param {Function} callback An optional callback. If not passed, the function will run in sync mode.
 */
function wJson(path, data, space, callback) {
    if (typeof space === "function") {
        callback = space;
        space = 2;
    } else if (space === undefined) {
        space = 2;
    }

    Fs["writeFile" + (typeof callback === "function" ? "" : "Sync")](path, JSON.stringify(data, null, space), callback);
}

module.exports = wJson;
