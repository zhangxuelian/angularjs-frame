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
            // css-loader是支持CSS Modules的
            {
                test: /\.css$/,
                use: ['style-loader',
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            // 编译方向从右到左less-loader=>css-loader=>style-loader
            {
                test: /\.less$/,
                use: ['style-loader',
                    {
                        loader: 'css-loader'
                    },
                    'less-loader'
                ]
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            },
            // 1.文件大小小于limit参数，url-loader将会把文件转为DataURL；2.文件大小大于limit，url-loader会调用file-loader进行处理，参数也会直接传给file-loader。
            {
                test: /\.(png|jpe?g|ico|gif|svg)(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    query: {
                        limit: 10000,
                        name: 'imgs/[name]--[folder].[ext]'
                    }
                }
            }, {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'media/[name]--[folder].[ext]'
                }
            }, {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    query: {
                        limit: 10000,
                        name: 'fonts/[name]--[folder].[ext]'
                    }
                }
            }
        ]
    },
    resolve: {
        // 别名
        alias: {
            angular$: path.resolve(__dirname, '../lib/angularjs/angular.js'),
            uiRouter$: path.resolve(__dirname, '../lib/angular-ui-router/release/angular-ui-router.js'),
            lib: path.resolve(__dirname, '../lib'),
            modules: path.resolve(__dirname, '../src/modules'),
            assets: path.resolve(__dirname,'../src/assets')
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