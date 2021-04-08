const { merge } = require('webpack-merge');
const baseConf = require('./webpack.base');

module.exports = merge(baseConf, {
  devtool: 'inline-source-map',
  mode: 'development',
  devServer: {
    contentBase: './dist',
  },
});
