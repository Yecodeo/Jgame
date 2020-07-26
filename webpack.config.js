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
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env']
				}
			}
		},
		{
			test: /\.css$/,
			exclude: /node_modules/,
			use: ['style-loader', 'css-loader']
		},
		{
			test: /\.scss$/,
			exclude: /node_modules/,
			use: [
				{
					loader: 'file-loader',
					options: {
						name: 'css/[name].css',
					}
				},
				{
					loader: 'extract-loader'
				},
				{
					loader: 'css-loader?-url'
				},
				{
					loader: 'postcss-loader'
				},
				{
					loader: 'sass-loader'
				}
			],
		},
		{
			test: /\.(png|jpe?g|gif)$/i,
			loader: 'file-loader',
			options: {
			  name: 'images/[name].[ext]',
			},
		  },
		]
	}
};