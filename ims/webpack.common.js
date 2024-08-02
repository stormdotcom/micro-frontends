const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PROJECT_PROPS = require("./projectconfig");
const { ProvidePlugin } = require("webpack");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                include: path.resolve(__dirname, "src"),
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                [
                                    "@babel/preset-env",
                                    {
                                        targets: "defaults",
                                    },
                                ],
                                "@babel/preset-react",
                            ],
                        },
                    },
                ],
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
            },
            {
                test: /\.(png|jpeg|gif|jpg)$/i,
                type: "asset/resource",
            },
            {
                test: /\.webp$/i,
                use: ["file-loader", "webp-loader"],
            },
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "mainApp",
            filename: "remoteEntry.js",
            shared: {
                react: {
                    singleton: true,
                    requiredVersion: '^18.0.0',
                },
                "react-dom": {
                    singleton: true,
                    requiredVersion: '^18.0.0',
                },
            },
        }),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            title: PROJECT_PROPS.title + " (Dev)",
        }),
        new ProvidePlugin({
            React: 'react',
        }),
    ],
    optimization: {
        splitChunks: {
            chunks: "all",
        },
    },
};
