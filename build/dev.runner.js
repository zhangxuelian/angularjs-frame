const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const webpackDevServer = require('webpack-dev-server');

// 会将 process.env.NODE_ENV 的值设为 development，启用 NamedChunksPlugin 和 NamedModulesPlugin
webpackConfig.mode = 'development';
let compiler = webpack(webpackConfig);
let server = new webpackDevServer(compiler, {
    open: true
});
server.listen(8282);