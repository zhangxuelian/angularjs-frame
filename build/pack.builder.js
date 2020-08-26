const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

// 会将 process.env.NODE_ENV 的值设为 production。
// 启用 FlagDependencyUsagePlugin, FlagIncludedChunksPlugin, ModuleConcatenationPlugin, NoEmitOnErrorsPlugin, OccurrenceOrderPlugin, SideEffectsFlagPlugin 和 UglifyJsPlugin.
webpackConfig.mode = 'production';
// https://www.webpackjs.com/configuration/devtool/
webpackConfig.devtool = '';
let compiler = webpack(webpackConfig);
compiler.run((err, stats) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log(stats.toString({
        chunks: false,  // 使构建过程更静默无输出
        colors: true    // 在控制台展示颜色
    }));
});
