import * as webpack from 'webpack';
import * as WebpackDevServer from 'webpack-dev-server';

import configuration from './webpack.dev.config';

new WebpackDevServer(webpack(configuration), {
  historyApiFallback: true,
  hot: true,  // enable hot reloading
  publicPath: configuration.output.publicPath,
}).listen(3000, 'localhost', (err: any, result: any) => {
  if (err) {
    return console.log(err);
  }
});
