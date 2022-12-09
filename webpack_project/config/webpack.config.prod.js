const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "production",
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
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(sass|scss)$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
        ],
    },
    output: {
        filename: "js/[name]-[contenthash:6].js",
        path: path.resolve(__dirname, "../", "build"),
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "new application",
            template: "src/templates/template.html",
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name]-[contenthash:6].css",
        }),
    ],
};
