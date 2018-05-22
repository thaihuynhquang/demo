const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const CleanWebPackPlugin = require('clean-webpack-plugin')

module.exports = {
	entry: {
		main: './src/index.js'
	},
	output: {
		filename: '[name].[hash].js',
		path: path.resolve('./dist')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: ['node_modules'],
				use: [{
					loader: 'babel-loader'
				}]
			},
			{
				test: /\.css$/,
				use: [{
					loader: 'style-loader'
				}, {
					loader: 'css-loader'
				}]
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './public/index.html'
		}),
		new CleanWebPackPlugin(['dist'])
	]
}
