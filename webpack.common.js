const webpack = require('webpack');
const path = require('path');
const GoogleFontsPlugin = require('@beyonk/google-fonts-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const ImageWebpackLoader = require('image-webpack-loader');

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
    hot: false,
    port: 9000,
    compress: true,
  },
  plugins: [
    new GoogleFontsPlugin({
      fonts: [{ family: 'Poppins', variants: ['300', '400', '500', '600'] }],

      // Add more fonts if needed
      local: false, // Use Google fonts CDN instead of downloading
    }),
    new ImageMinimizerPlugin({
      minimizerOptions: {
        plugins: [
          ['jpegtran', { progressive: true }],
          ['optipng', { optimizationLevel: 5 }],
        ],
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(svg|jpe?g|png|gif)$/i,
        type: 'asset/resource',
        use: [
          {
            loader: ImageWebpackLoader.loader,
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              optipng: {
                enabled: true,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              generator: {
                filename: 'assets/img/[name][ext]',
              },
            },
          },
        ],
      },
    ],
  },
};
