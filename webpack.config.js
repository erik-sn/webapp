
var path = require('path');
var webpack = require('webpack');
require('es6-promise').polyfill();

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index.tsx',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        BROWSER: JSON.stringify(true),
      },
    }),
  ],
  module: {
    loaders: [
    {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass'],
    },
    {
      test: /\.js$/,
      loader: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src'),
    },
    { test: /\.tsx?$/,
      loaders: ['react-hot', 'babel', 'ts-loader'],
      include: path.join(__dirname, 'src'),
    },
    ],
  },
};
