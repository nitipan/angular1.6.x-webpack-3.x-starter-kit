const merge = require('webpack-merge');
const common = require('./webpack.config.common');
module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        historyApiFallback: true
    }
});