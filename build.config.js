const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    app: './assets/js/index.js',
    post: './assets/js/post.js',
    head: './assets/js/head.js'
  },

  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'assets', 'built')
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      path: path.join(__dirname, 'assets', 'built')
    }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  }
};
