const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PROJECT_PROPS = require("./projectconfig");
const { ProvidePlugin } = require("webpack");
const { ModuleFederationPlugin } = require("webpack").container;
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const dotenv = require("dotenv");
const ESLintPlugin = require("eslint-webpack-plugin");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const chalk = require("chalk");

// Load environment variables from .env file
dotenv.config();
module.exports = {
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
        publicPath: "/"
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
                                        targets: "defaults"
                                    }
                                ],
                                "@babel/preset-react"
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: "images/",
                            name: "[name][hash].[ext]"
                        }

                    }
                ]
            },
            {
                test: /\.webp$/i,
                use: ["file-loader", "webp-loader"]
            }
        ]
    },
    plugins: [
        new ESLintPlugin({
            extensions: ["js", "jsx"],
            exclude: "node_modules"
        }),
        new ModuleFederationPlugin({
            name: "mainApp",
            filename: "remoteEntry.js",
            shared: {
                react: {
                    singleton: true,
                    requiredVersion: "^18.0.0"
                },
                "react-dom": {
                    singleton: true,
                    requiredVersion: "^18.0.0"
                }
            }
            // remotes: {
            //     landingPage: "landingPage@http://localhost:3000/_next/static/remoteEntry.js"
            // },
        }),
        new ProgressBarPlugin({
            format: chalk.yellow.bold(":msg") + " [:bar " + chalk.green.bold(":percent") + "] (" + chalk.red.bold(":elapsed") + " seconds)",
            clear: false
        }),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "index.html",
            title: PROJECT_PROPS.title + " (Dev)"
        }),
        new ProvidePlugin({
            React: "react"
        }),
        new FaviconsWebpackPlugin({
            logo: path.resolve(__dirname, "./src/assets/favicon.png"),
            cache: true,
            inject: true,
            favicons: {
                appName: "IMS - Hotspot",
                appDescription: "Inventory Management System",
                developerName: "Ajmal Nasumudeen",
                developerURL: null,
                background: "#ddd",
                theme_color: "#F6EB16",
                icons: {
                    coast: false,
                    yandex: false
                }
            }
        })
    ],
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    }
};
