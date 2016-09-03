import * as webpack from "webpack";
const WebpackDevServer = require("webpack-dev-server");
const config = require("./webpack.config.ts");

new WebpackDevServer(webpack(config), {
  historyApiFallback: true,
  hot: true,  // enable hot reloading
  publicPath: config.output.publicPath,
}).listen(3000, "localhost", (err: any, result: any) => {
  if (err) {
    return console.log(err);
  }
});