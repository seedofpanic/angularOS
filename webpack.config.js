var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        bundle: './src/js/main.js',
        styles: './src/css/style.scss'
    },
    output: {
        path: __dirname + '/public/build',
        publicPath: "build",
        filename: "[name].js"
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader", "autoprefixer-loader")
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader", "autoprefixer-loader")
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
                loader: 'file-loader'
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin("[name].css")
    ],

    devtool: "eval-source-map"
}
