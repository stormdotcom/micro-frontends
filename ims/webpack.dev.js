// webpack.dev.js
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

const dotenv = require("dotenv");
const path = require("path");

dotenv.config();
module.exports = merge(common, {
  mode: "development",
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    static: {
      directory: path.resolve(__dirname, "public")
    },
    open: true,
    port: 9000,
    hot: true,
    client: {
      logging: "verbose"
    },
    historyApiFallback: {
      index: "/"
    }
  },
  devtool: "source-map"
});
