const gulp = require("gulp");
const path = require("./gulp/config/path");
const plugins = require("./gulp/config/plugins");

const reset = require("./gulp/tasks/reset");
const html = require("./gulp/tasks/html");
const scss = require("./gulp/tasks/scss");
const { images, imagesEditable } = require("./gulp/tasks/images");
const server = require("./gulp/tasks/server");
const font = require("./gulp/tasks/font");
const js = require("./gulp/tasks/js");

global.app = {
  gulp: gulp,
  path: path,
  plugins: plugins,
};
function watcher() {
  gulp.watch(path.watcher.html, html);
  gulp.watch(path.watcher.scss, scss);
  gulp.watch(path.watcher.images, images);
  gulp.watch(path.watcher.imagesEditable, images);
  gulp.watch(path.watcher.js, js);
}

// ~ Tasks
const fonts = gulp.series(
  font.otfToTtf,
  font.ttfToWoff,
  font.woffAndWoff2,
  font.fontsStyle
);

exports.default = gulp.series(
  reset,
  gulp.parallel(html, scss, images, imagesEditable, fonts, js),
  gulp.parallel(watcher, server)
);
