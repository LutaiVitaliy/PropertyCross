const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

const postCssLoader = {
    loader: 'postcss-loader',
    options: {
        plugins: [
            autoprefixer({
                browsers: ['last 2 versions']
            })
        ],
    }
};

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', postCssLoader, 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        hot: true,
        historyApiFallback: true,
        contentBase: "./public"
    }
};