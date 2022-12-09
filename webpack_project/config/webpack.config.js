const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: {
        main: "./src/index.js",
    },
    module: {
        rules: [
            {
                test: /\.txt$/,
                use: "raw-loader",
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(sass|scss)$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
    output: {
        filename: "js/[name].js",
        path: path.resolve(__dirname, "../", "build"),
    },
    devServer: {
        open: true,
        static: {
            directory: path.join(__dirname, "../", "public"),
        },
        port: 5001,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "new application",
            template: "src/templates/template.html",
        }),
    ],
};
