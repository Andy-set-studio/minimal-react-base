const TerserPlugin = require('terser-webpack-plugin');

const paths = {
  in: `${__dirname}/src/js/main.js`,
  out: {path: `${__dirname}/dist/js/`, name: 'main.js'}
};

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  entry: paths.in,
  mode: isProd ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  output: {
    path: paths.out.path,
    filename: paths.out.name
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        sourceMap: !isProd
      })
    ]
  }
};
