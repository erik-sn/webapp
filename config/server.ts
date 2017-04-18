import * as webpack from 'webpack';
import * as WebpackDevServer from 'webpack-dev-server';

import configuration from './webpack.dev.config';

const compiler: any = webpack(configuration);

new WebpackDevServer(compiler, {
  historyApiFallback: true,
  hot: true,  // enable hot reloading
  publicPath: configuration.output.publicPath,
}).listen(3000, 'localhost', (err: any, result: any) => {
  if (err) {
    // tslint:disable-next-line:no-console
    return console.log(err);
  }
});
