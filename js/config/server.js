/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const configuration = require('./webpack.dev.config');

const compiler = webpack(configuration);

new WebpackDevServer(compiler, {
  historyApiFallback: true,
  hot: true,  // enable hot reloading
  publicPath: configuration.output.publicPath,
}).listen(3000, 'localhost', (err) => {
  if (err) {
    return console.log(err);
  }
  return console.log('Server running on port 3000');
});
