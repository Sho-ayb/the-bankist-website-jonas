const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: "./src/js/index.js",
  devServer: {
    watchFiles: ["src/*.html"],
    static: "./build",
  },
  module: {
    rules: [
      {
        test: /\.(svg|jpg|png)$/,
        type: "asset/resource",
      },
    ],
  },
};
