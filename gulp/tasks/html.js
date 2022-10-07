const fileinclude = require("gulp-file-include")

function html(){
    return app.gulp.src(app.path.src.html)
    .pipe(app.plugins.plumber())
    .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
      }))
    .pipe(app.plugins.replace(/@img\//g, "./assets/images/"))
    .pipe(app.plugins.replace(/@imge\//g, "./assets/images/editable"))
    .pipe(app.gulp.dest(app.path.build.dist))
}

module.exports = html;