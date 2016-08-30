var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,  //enable hot reloading
  /**
   * This server will only serve our index.html file at the root 
   * i.e. localhost:3000/ - any url beyond that will generate a 404
   * error. historyApiFallback allows that index.html to be loaded
   * regardless of the url. 
   * 
   * See: https://webpack.github.io/docs/webpack-dev-server.html#the-historyapifallback-option
   */
  historyApiFallback: true,
}).listen(3000, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }
});