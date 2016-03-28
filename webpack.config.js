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
				test: /\.jsx?$/,
				// Options to configure babel with
				query: {
					plugins: ['transform-runtime'],
					presets: ['es2015', 'react'],
				}
			}
		]
	},
	output: {
		filename: 'bundle.js'
	},
	entry: [
		'./src/index.js'
	],
	watch: true,
	colors: true,
	progress: true
};