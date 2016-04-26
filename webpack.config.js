/**
 * Created by Peter Rietveld (p.rietveld@live.com) on 28-3-2016.
 *
 * Any use of the code written here-in belongs to the developer and is
 * hereby the owner. If used, one must have strict approval by the
 * developer of the code written here-in. The developer may at anytime
 * change, modify, add, or delete any content contained within.
 *
 * Copyright (c) 2016 Strictly Internet
 */
var path = require('path');
var webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const sassLoaders = [
	'css-loader',
	'postcss-loader',
	'sass-loader?includePaths[]=' + path.resolve(__dirname, './src')
];

module.exports = {
	module: {
		loaders: [
			{
				loader: "babel-loader",
				// Skip any files outside of your project's `src` directory
				include: [
					path.resolve(__dirname, "src"),
				],
				// Only run `.js` and `.jsx` files through Babel
				test: /\.jsx?$//*,
				// Options to configure babel with (moved to .babelrc)
				query: {
					plugins: ['transform-runtime'],
					presets: ['es2015', 'react'],
				}*/
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!')),
			}
		]
	},
	output: {
		filename: '[name].js',
		path: path.join(__dirname, './build'),
		publicPath: '/build'
	},
	plugins: [
		new ExtractTextPlugin('[name].css')
	],
	entry: {
		// when using a named entry this will create a app.js and app.css when [name] is used
		app: ['./src/app']
	},
	watch: true,
	colors: true,
	progress: true,
	devtool: 'source-map',
	sassLoader: {
		includePaths: [path.resolve(__dirname, "./src")]
	},
	resolve: {
		extensions: ['', '.js', '.scss'],
		root: [path.join(__dirname, './src')]
	}
};