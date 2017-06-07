
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: './client/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry: './client/index.js',
	output: {
		path: path.resolve('dist'),
		filename: 'index_bundle.js'
	},
	module: {
		loaders: [
			{ 
				test: /\.js$/, 
				loader: ['babel-loader', 'eslint-loader'],
				exclude: /node_modules/ 
			},
			{ 
				test: /\.jsx$/, 
				loader: 'babel-loader', 
				exclude: /node_modules/ 
			},
			{ 
				test: [/\.scss$/, /\.css$/],
				include: path.appSrc,
				loaders: ['style-loader', 'css-loader'], 
			},
		]
	},
	plugins: [HtmlWebpackPluginConfig],
	resolve: {
    extensions: ['.js', '.jsx'],
  }
}

