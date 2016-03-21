
'use strict'

var webpack = require('webpack');
var path = require('path');
var env = process.env.NODE_ENV;

var config = {
    devtool: 'source-map',
    entry: ['./src/index.js'],
    output: {
        library: 'ReactKeypad',
        libraryTarget: 'umd',
        filename: 'index.js',
        path: path.join(__dirname, 'dist')
    },
    externals: {
        'react': {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
        }
    },
    module: {
        loaders: [
            { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ }
        ]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(env)
        })
    ]
};

if (env === 'production') {
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                pure_getters: true,
                unsafe: true,
                unsafe_comps: true,
                screw_ie8: true,
                warnings: false
            }
        })
    )
}

module.exports = config
