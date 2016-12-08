var webpack = require('webpack');

module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname + '/public/build',
        publicPath: "build",
        filename: "bundle.js"
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
                loader: "style-loader!css-loader!autoprefixer-loader",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.jpg$/,
                loader: "url-loader?limit=1000&mimetype=image/jpg"
            },
            {
                test: /\.png$/,
                loader: "url-loader?limit=1000&mimetype=image/png"
            }
        ]
    },

    devtool: "source-map"
}
