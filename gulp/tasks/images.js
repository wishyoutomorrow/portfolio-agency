const webp = require("gulp-webp");

function images() {
  return app.gulp
    .src(app.path.src.images)
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.gulp.src(app.path.src.svg))
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.gulp.src(app.path.src.images))
    .pipe(webp())
    .pipe(app.gulp.dest(app.path.build.images));
}

function imagesEditable() {
  return app.gulp
    .src(app.path.src.imagesEditable)
    .pipe(app.gulp.dest(app.path.build.imagesEditable))
    .pipe(app.gulp.src(app.path.src.svgEditable))
    .pipe(app.gulp.dest(app.path.build.imagesEditable))
    .pipe(app.gulp.src(app.path.src.imagesEditable))
    .pipe(webp())
    .pipe(app.gulp.dest(app.path.build.imagesEditable));
}

module.exports = { images, imagesEditable };
