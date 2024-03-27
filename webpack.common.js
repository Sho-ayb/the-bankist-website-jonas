const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/js/index.js',
  devServer: {
    watchFiles: ['src/*.html'],
    static: {
      directory: path.join(__dirname, 'build'),
    },
    client: {
      logging: 'info',
      webSocketURL: 'ws://localhost:9000/ws',
      webSocketTransport: 'ws',
    },
    webSocketServer: 'ws',
    headers: { 'Access-Control-Allow-Origin': '*' },
    hot: false,
    port: 9000,
    compress: true,
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
