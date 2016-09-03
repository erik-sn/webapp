var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
require('es6-promise').polyfill()

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    './src/index.tsx',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.min.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
    }),
    new ExtractTextPlugin('/bundle.min.css', {
      allChunks: true,
    }),
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src'),
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('css!sass'),
    },
    {
      test: /\.jpe?g$|\.gif$|\.png$/i,
      loader: 'file-loader?name=/img/[name].[ext]',
    },
    { test: /\.tsx?$/,
      loaders: ['react-hot', 'babel', 'ts-loader'],
      include: path.join(__dirname, 'src'),
    },
],
  },
};
