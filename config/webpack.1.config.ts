/* tslint:disable:no-var-requires object-literal-sort-keys */
import * as promise from 'es6-promise';
import * as path from 'path';
import * as webpack from 'webpack';

const autoprefixer = require('autoprefixer');

promise.polyfill();

const configuration: any = {
  devtool: 'cheap-eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    './src/index',
  ],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        BROWSER: JSON.stringify(true),
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
  module: {
    loaders: [
      {
        loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
        test: /\.scss$/,
      },
      {
        include: path.join(__dirname, '../src'),
        loader: 'ts-loader',
        test: /\.tsx$/,
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        loader: 'file-loader',
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
      },
    ],
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.ts', '.tsx'],
  },
  postcss: [autoprefixer],
};

export default configuration;
