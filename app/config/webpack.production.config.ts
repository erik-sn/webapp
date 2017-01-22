/* tslint:disable:no-var-requires object-literal-sort-keys */
import * as autoprefixer from 'autoprefixer';
import * as promise from 'es6-promise';
import * as ExtractTextPlugin from 'extract-text-webpack-plugin';
import * as path from 'path';
import * as webpack from 'webpack';

const appconfig = require('../package.json');
promise.polyfill();

module.exports = {
  devtool: 'hidden-source-map',
  entry: [
    './src/index.tsx',
  ],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.min.' + appconfig.version + '.js',
    publicPath: '/dist/',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
    }),
    new ExtractTextPlugin('/bundle.min.' + appconfig.version + '.css', {
      allChunks: true,
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!postcss!sass'),
        include: path.join(__dirname, '../src/sass'),
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$/i,
        loader: 'file-loader?name=/img/[name].[ext]',
      },
      {
        test: /\.ts$|\.tsx$/,
        loaders: ['awesome-typescript-loader'],
        include: path.join(__dirname, '../src'),
      },
    ],
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.ts', '.tsx', '.json'],
  },
  postcss: [autoprefixer],
};
