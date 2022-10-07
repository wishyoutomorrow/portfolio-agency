const dartSass = require("sass");
const gulpSass = require("gulp-sass");
const scss = gulpSass(dartSass);
const autoprefixer = require("gulp-autoprefixer");
const rename = require("gulp-rename");
const gcmq = require("gulp-group-css-media-queries");
const cleanCss = require("gulp-clean-css");
const webp = require("gulp-webp-css");

function scssToCss() {
  return app.gulp
    .src(app.path.src.scss)
    .pipe(app.plugins.sourcemaps.init())
    .pipe(scss())
    .pipe(app.plugins.plumber())
    .pipe(
      autoprefixer({
        grid: true,
        cascade: true,
      })
    )
    .pipe(app.plugins.replace(/@img\//g, "../images/"))
    .pipe(app.plugins.replace(/@imge\//g, "../images/editable/"))
    .pipe(webp())
    .pipe(gcmq())
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(cleanCss({ compatibility: "ie8" }))
    .pipe(
      rename({
        extname: ".min.css",
      })
    )
    .pipe(app.plugins.sourcemaps.write())
    .pipe(app.gulp.dest(app.path.build.css));
}

module.exports = scssToCss;
