const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: ['react-hot-loader/patch',
            'webpack-hot-middleware/client',
            'babel-polyfill','./src/appindex.js'],
        player: ['react-hot-loader/patch',
            'webpack-hot-middleware/client',
            'babel-polyfill','./src/playerindex.js']
    },
    output: {
        filename: 'static/js/[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    plugins: [
        
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.tpl.html',
            favicon: './favicon.ico',
            title: 'QQmusic',
            chunks: ['app'],
            minify : {
             removeComments : true, //打包后删除参数
             collapseWhitespace : true //打包后删除空格
             }
        }),
        new HtmlWebpackPlugin({
            filename: 'player.html',
            template: './player.tpl.html',
            favicon: './favicon.ico',
            title: 'Qplayer',
            chunks: ['player'],
            minify : {
             removeComments : true, //打包后删除参数
             collapseWhitespace : true //打包后删除空格
             }
        }),
        new CleanWebpackPlugin(['dist']),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        // Use NoErrorsPlugin for webpack 1.x
        new webpack.NoEmitOnErrorsPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: ["react-hot-loader/babel"],
                        presets: ['react', 'es2015']
                    }
                }
            },
            { test: /\.css$/, use: ['style-loader', 'css-loader']},
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
            { test: /\.(png|svg|jpg|gif)$/, use: {
                loader: 'file-loader',
                options: {
                    name: 'static/images/[name].[ext]'
                }
                }
            }
        ]
    }
};