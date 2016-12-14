var webpack = require('webpack');

module.exports = {
    entry: {
        bundle: './src/app.js',
    },
    output: {
        path: __dirname + '/src',
        filename: './bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: [/node_modules/]
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader!autoprefixer-loader"
            },
            {
                test: /\.scss$/,
                loader: "style-loader!css-loader!sass-loader!autoprefixer-loader"
            },
            {
                test: /\.html/,
                loader: "html-loader"
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

    watch: true,
    devtool: "eval-source-map"
}
