const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./js/app.js",

    mode: "development",

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
        publicPath: "/",
    },

    devServer: {
        open: true,
        static: {
            directory: path.join(__dirname, "../", "public"),
        },
        compress: true,
        port: 3000,
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            // {
            //     test: /\.jpg$/,
            //     use: ["file-loader"],
            // },
        ],
    },

    plugins: [new HtmlWebpackPlugin({ template: "./index.html" })],
};
