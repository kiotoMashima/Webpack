const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './src/js'),
        filename: 'app.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'main.html'
        }),
        new MiniCSSExtractPlugin()
    ],
    module: {
    rules: [{
        test: /\.css$/,
        use: [
        MiniCSSExtractPlugin.loader,
        'css-loader'
        ]
    }
    ]}
}