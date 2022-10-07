const rootFolder = "dist/";
const srcFolder = "./src";

module.exports = {
  build: {
    dist: rootFolder,
    css: `${rootFolder}/assets/style`,
    images: `${rootFolder}/assets/images`,
    imagesEditable: `${rootFolder}/assets/images/editable`,
    fonts: `${rootFolder}/assets/fonts`,
    js: `${rootFolder}/assets/scripts`,
  },
  src: {
    html: `${srcFolder}/index.html`,
    scss: `${srcFolder}/theme/style/index.scss`,
    images: `${srcFolder}/theme/images/**/*.{png,jpg,jpeg,gif,webp}`,
    imagesEditable: `${srcFolder}/assets/images/**/*.{png,jpg,jpeg,gif,webp}`,
    svg: `${srcFolder}/theme/images/**/*.svg`,
    svgEditable: `${srcFolder}/assets/images/*/*.svg`,
    js: `${srcFolder}/assets/scripts`,
  },
  watcher: {
    scss: `${srcFolder}/theme/**/*.scss`,
    html: `${srcFolder}/**/*.html`,
    js: `${srcFolder}/assets/scripts/**/*`,
    imagesEditable: `${srcFolder}/assets/images/**/*`,
    images: `${srcFolder}/theme/images/**/*`,
  },
  buildFolder: rootFolder,
  srcFolder: srcFolder,
};
