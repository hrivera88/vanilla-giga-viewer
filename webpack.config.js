const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const BundleAnalyzerPlugin =
	require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
	entry: '/src/index.tsx',
	devServer: {
		open: true,
		host: 'localhost',
		liveReload: true,
	},
	module: {
		rules: [
			{
				test: /\.tsx?/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.(js|jsx)$/i,
				use: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css$/i,
				use: [
					process.env.NODE_ENV === 'production'
						? MiniCssExtractPlugin.loader
						: 'style-loader',
					'css-loader',
					'postcss-loader',
				],
				exclude: /node_modules/,
			},
			{
				test: /\.(png|svg|jpg|gif)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)/i,
				type: 'asset/resource',
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			favicon: './public/favicon.ico',
			manifest: './public/manifest.json',
		}),
		process.env.WEBPACK_BUNDLE_ANALYZE ? new BundleAnalyzerPlugin({}) : '',
		new MiniCssExtractPlugin(),
	],
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.json'],
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	target: 'web',
	optimization: {
		minimizer: [
			'...',
			new CssMinimizerPlugin({
				minimizerOptions: {
					preset: [
						'default',
						{
							discardComments: { removeAll: true },
						},
					],
				},
			}),
			new ImageMinimizerPlugin({
				minimizer: {
					implementation: ImageMinimizerPlugin.imageminMinify,
					options: {
						plugins: [['imagemin-mozjpeg', { quality: 55, progressive: true }]],
					},
				},
				generator: [
					{
						preset: 'webp',
						type: 'import',
						implementation: ImageMinimizerPlugin.imageminGenerate,
						options: {
							plugins: ['imagemin-webp']
						},
					},
				],
			}),
		],
		minimize: true,
	},
};
