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
 * @param {Function} callback An optional callback. If not passed, the function will run in sync mode.
 */
function wJson(path, data, callback) {
    Fs["writeFile" + (typeof callback === "function" ? "" : "Sync")](path, JSON.stringify(data), callback);
}

module.exports = wJson;
