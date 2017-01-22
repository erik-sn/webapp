/* tslint:disable:no-var-requires object-literal-sort-keys */
import * as autoprefixer from 'autoprefixer';
import * as promise from 'es6-promise';
import * as path from 'path';
import * as webpack from 'webpack';


promise.polyfill();

const configuration: webpack.Configuration = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    './src/index.tsx',
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '../dist'),
    publicPath: '/static/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        BROWSER: JSON.stringify(true),
      },
    }),
    new webpack.LoaderOptionsPlugin({ options: { postcss: [ autoprefixer ] } }),
  ],
  module: {
    rules: [
      {
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
        test: /\.scss$/,
      },
      {
        include: path.join(__dirname, '../src'),
        use: ['awesome-typescript-loader'],
        test: /\.tsx$/,
      },
      {
        include: path.join(__dirname, '../src'),
        use: ['awesome-typescript-loader'],
        test: /\.ts$/,
      },
      {
        test: /\.json$/,
        use: 'json-loader',
      },
      {
        use: 'file-loader',
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
      },
    ],
  },
  resolve: {
    extensions: ['*', '.ts', '.tsx', '.json'],
  },
};

export default configuration;
