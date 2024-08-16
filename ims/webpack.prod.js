// webpack.prod.js
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const dotenv = require("dotenv");
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


    ]
});
