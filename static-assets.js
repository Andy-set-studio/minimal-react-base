const fs = require('fs');
const postcss = require('postcss');
const atImport = require('postcss-import');
const cssnano = require('cssnano');
const isProduction = process.env.NODE_ENV === 'production';

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

const runner = async () => {
  const cssSrc = fs.readFileSync(paths.css.in, 'utf8');
  const htmlSrc = fs.readFileSync(paths.html.in, 'utf8');

  const {css} = await postcss()
    .use(atImport())
    .use(cssnano({sourcemap: !isProduction}))
    .process(cssSrc, {
      from: paths.css.in
    });

  fs.writeFileSync(paths.css.out, css);
  fs.writeFileSync(paths.html.out, htmlSrc);

  return true;
};

runner();
module.exports = runner;
