var fs = require('fs');
var postcss = require('postcss');
var atImport = require('postcss-import');

const paths = {
  css: {
    in: './src/css/global.css',
    out: './dist/css/global.css'
  },
  html: {
    in: './src/index.html',
    out: './dist/index.html'
  }
};

const process = async () => {
  const cssSrc = fs.readFileSync(paths.css.in, 'utf8');
  const htmlSrc = fs.readFileSync(paths.html.in, 'utf8');

  const {css} = await postcss()
    .use(atImport())
    .process(cssSrc, {
      from: paths.css.in
    });

  fs.writeFileSync(paths.css.out, css);
  fs.writeFileSync(paths.html.out, htmlSrc);

  return true;
};

process();
