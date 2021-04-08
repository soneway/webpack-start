const path = require('path');

module.exports = {
  entry: './src/index.js',
  devtool: false,
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: path.resolve(__dirname, 'build/loaders/minify-loader.js'),
            options: {
              minify: true,
            },
          },
          {
            loader: path.resolve(__dirname, 'build/loaders/comments-loader.js'),
            options: {
              removeComments: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader',
        ],
      },
    ],
  },
};
