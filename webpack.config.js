const HtmlWebpackPlugin = require ("html-webpack-plugin");
const path = require ("path");
const MiniCssExtractPlugin = require ("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname,  "src", "index.js"),
    output: {
        filename: "main.bundle.js"
    },

    module:  {
        rules: [
            {
                test: /\.sass$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template:  path.resolve(__dirname,  "index.html")
        }),
        new MiniCssExtractPlugin({
            filename: "main.bundle.css"
        })

    ]
}