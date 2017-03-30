const { resolve } = require('path');
const webpack = require('webpack');


const config = {
    output: {
        filename: 'build.js',
        publicPath: '/'
    },
    context: resolve(__dirname, 'src'),
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader?modules',
                    'postcss-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin()
    ]
};

if (process.env.NODE_ENV === 'production') {
    config.entry = ['./index.js'];
} else {
    config.entry = [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './index.js'
    ];
    config.devServer = {
        hot: true,
        publicPath: '/',
        port: 3000,
    };
    config.plugins.push(new webpack.HotModuleReplacementPlugin())
}


module.exports = config;
