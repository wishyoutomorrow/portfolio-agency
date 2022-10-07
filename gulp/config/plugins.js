const plumber = require("gulp-plumber");
const replace = require("gulp-replace");
const browsersync = require("browser-sync");
const sourcemaps = require("gulp-sourcemaps");

module.exports = {
  plumber: plumber,
  replace: replace,
  browsersync: browsersync,
  sourcemaps: sourcemaps,
};
