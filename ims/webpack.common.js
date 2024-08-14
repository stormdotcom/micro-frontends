const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PROJECT_PROPS = require("./projectconfig");
const { ProvidePlugin } = require("webpack");
const { ModuleFederationPlugin } = require("webpack").container;
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();
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
            // remotes: {
            //     landingPage: "landingPage@http://localhost:3000/_next/static/remoteEntry.js"
            // },
        }),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "index.html",
            title: PROJECT_PROPS.title + " (Dev)",
        }),
        new ProvidePlugin({
            React: 'react',
        }),
        new FaviconsWebpackPlugin('./src/assets/favicon.ico')
    ],
    optimization: {
        splitChunks: {
            chunks: "all",
        },
    },
};
