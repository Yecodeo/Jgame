const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
	mode: 'development',
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		},
		{
			test: /\.css$/,
			exclude: /node_modules/,
			use: ['styles-loader','css-loader']
		},
		{
			test: /\.scss$/,
			exclude: /node_modules/,
			use: [{
				loader: 'sass-loader',
				options: {
					implementation: require('sass'),
					sassOptions: {
						fiber: require('fibers'),
					},
				},
			},

			],
		},
		]
	}
};