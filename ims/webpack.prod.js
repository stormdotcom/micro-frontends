// webpack.prod.js
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const PROJECT_PROPS = require("./projectconfig.js");
const dotenv = require("dotenv");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

dotenv.config();
module.exports = merge(common, {
    mode: "production",
    devtool: "source-map",
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            title: PROJECT_PROPS.title,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            }
        })
    ]
});
