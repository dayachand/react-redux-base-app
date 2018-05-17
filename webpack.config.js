const {resolve} = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: resolve(__dirname, 'src'),
    entry: [
        './index.js'
        // the entry point of our app
    ],
    output: {
        filename: 'index.js',
    },
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true,
        port: 9001
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: ['babel-loader',],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                        use: [
                            {
                                loader: "css-loader" // translates CSS into CommonJS
                            },
                            {
                                loader: "sass-loader" // compiles Sass to CSS
                            }
                        ],
                        fallback: "style-loader" // used when css not extracted
                    }
                ))
            },
            {
                test: /\.gif($|\?)|\.jpeg($|\?)|\.png($|\?)|\.jpg($|\?)|\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
                use: 'url-loader'
            }
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates

        new ExtractTextPlugin({filename: 'styles.css', allChunks: true}),

        new webpack.LoaderOptionsPlugin({
            options: {
                historyApiFallback: true
            }
        })
    ]
};
