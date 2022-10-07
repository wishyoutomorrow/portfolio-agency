function server() {
  const files = app.path.buildFolder + "/**/*.*";
  app.plugins.browsersync.init({
    server: app.path.buildFolder,
  });
  app.plugins.browsersync.watch(files, app.plugins.browsersync.reload);
}

module.exports = server;
