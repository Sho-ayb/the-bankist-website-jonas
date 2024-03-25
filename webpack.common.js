const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/js/index.js',
  devServer: {
    watchFiles: ['src/*.html'],
    static: {
      directory: path.join(__dirname, 'build'),
    },
    hot: false,
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.(svg|jpg|png)$/,
        type: 'asset/resource',
      },
    ],
  },
};
