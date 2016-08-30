var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
require('es6-promise').polyfill()

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    './src/index',
  ],
  output: {
	/**
	* output defines where our bundle.min.js and bundle.min.css
    * files will be put. In this configuration we are putting them
    * in the '/dist' folder in our root directory. In our
	* server.production.js we define this '/dist' folder as a static
	* resource, and our Isomorphic html points to it to retrieve these
	* files.
	*/
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.min.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.DefinePlugin({
	  /**
	  *   tell React we are in production mode, this will eliminate
	  *   some development tools we don't need in production
	  */
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
    }),
	/**
	* this will analyze all of the SASS files and bundle them into
	* one css file. This file is placed after the 'path' in the output
	* configuration above - so for this project, '/dist/bundle.min.css'
	*/
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
	  // send all SASS files into the ExtractTextPlugin
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('css!sass'),
    },
    {
      test: /\.jpe?g$|\.gif$|\.png$/i,
      loader: 'file-loader?name=/img/[name].[ext]',
    },
],
  },
};
