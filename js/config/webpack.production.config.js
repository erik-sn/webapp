/* eslint-disable */
require('dotenv').config({ path: '../.env' });

const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const version = require('../package.json').version;

// if the application is being served through express.js &
// server side rendering, place in dist folder. If it is being
// served through Django, place it in the api app/static folder
let outputPath = '../dist';
if (process.env.SERVER.toUpperCase() === 'DJANGO') {
  outputPath = '../../api/static/api';
}

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index.js',
  ],
  output: {
    path: path.join(__dirname, outputPath),
    filename: `bundle.min.${version}.js`,
    publicPath: '/dist/',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new ExtractTextPlugin({
      filename: `/bundle.min.${version}.css`,
      allChunks: true,
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
      },
    }),
    new webpack.LoaderOptionsPlugin({ options: { postcss: [autoprefixer] } }),
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en/),
    // new BundleAnalyzerPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'sass-loader'],
          publicPath: '/dist',
        }),
        include: path.join(__dirname, '../src/sass'),
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$/i,
        use: 'file-loader?name=[name].[ext]',
      },
      {
        test: /\.js$/,
        include: path.join(__dirname, '../src'),
        use: ['babel-loader'],
      },
      {
        test: /\.json$/,
        use: 'json-loader',
      },
    ],
  },
  resolve: {
    extensions: ['*', '.json', '.', '.js'],
  },
};
