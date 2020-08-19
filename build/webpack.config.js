const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
let webpackConfig = {
    entry: {
        // __dirname：当前目录
        main: path.join(__dirname, '../src/main.js')
    },
    output: {
        // [name]是entry的key
        filename: '[name].js',
        path: path.join(__dirname, '../dist')
    },
    devtool: 'cheap-module-eval-source-map',
    module: {
        rules: [
            {
                test: '/\.css$/',
                use: ['style-loader', 'css-loader']
            },
            {
                test: '/\.less$/',
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    },
    resolve: {
        // 别名
        alias: {
            angular$: path.resolve(__dirname, '../lib/angularjs/angular.js'),
            lib: path.resolve(__dirname, '../lib'),
            modules: path.resolve(__dirname, '../src/modules')
        },
        // 自动解析定义的扩展后缀
        extensions: [".js", ".json"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'angularjs+webpack框架',
            filename: 'index.html',
            template: path.join(__dirname, '../src/index.html')
        })
    ],
    // https://www.webpackjs.com/configuration/target/
    target: 'web'
};
module.exports = webpackConfig;