// webpack.dev.js
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();
module.exports = merge(common, {
  mode: "development",
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
    open: true,
    port: 9000,
    historyApiFallback: true,
  },
  devtool: "inline-source-map",
});
