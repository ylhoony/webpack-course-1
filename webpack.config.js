const path = require('path');
const ExtractTextPugin = require('extract-text-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: 'build/'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/
      },
      {
        // use: ['style-loader', 'css-loader'],
        loader: ExtractTextPugin.extract({
          loader: 'css-loader'
        }),
        test: /\.css$/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        // test: /\.(gif|jpe?g|png|svg)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 40000 }
          },
          // 'image-webpack-loader'
          // 'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {}
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPugin('style.css')
  ]
};

module.exports = config;
