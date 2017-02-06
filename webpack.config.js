var webpack = require('webpack');
var webpackUglifyJsPlugin = require('webpack-uglify-js-plugin');

module.exports = {
    entry: {
        bundle: './src/app.ts',
    },
    output: {
        path: __dirname + '/src',
        filename: './bundle.js'
    },

    module: {

        preLoaders: [
            {
                test: /\.tsx?$/,
                loader: "tslint",
                exclude: [/node_modules/]
            },
        ],

        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: [/node_modules/]
            },
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader",
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

    tslint: {
        configFile: "tslint.json",
        emitErrors: true,
        failOnHint: true
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            minimize: true,
            output: {
                comments: false
            }
        })
    ],

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    watch: true,
    devtool: "eval-source-map"
}
