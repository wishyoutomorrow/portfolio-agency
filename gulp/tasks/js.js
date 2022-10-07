const babel = require("gulp-babel");
const minify = require("gulp-minify");

function js() {
  return app.gulp
    .src(app.path.src.js + "/index.js")
    .pipe(app.plugins.sourcemaps.init())
    .pipe(
      babel({
        presets: ["@babel/preset-env"],
      })
    )
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(
      minify({
        ext: {
          src: ".js",
          min: ".min.js",
        },
      })
    )
    .pipe(app.plugins.sourcemaps.write())
    .pipe(app.gulp.dest(app.path.build.js));
}

module.exports = js;
