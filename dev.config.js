const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FileManager = require('filemanager-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: './assets/js/index.js',
    post: './assets/js/post.js'
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'assets', 'built')
  },
  devtool: 'inline-source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      path: path.join(__dirname, 'assets', 'built')
    }),
    new FileManager({
      onEnd: {
        copy: [
          {
            source: './package.json',
            destination: '/home/ryan/Projects/ghost/content/themes/smart'
          },
          {
            source: './*.hbs',
            destination: '/home/ryan/Projects/ghost/content/themes/smart'
          },
          {
            source: './partials/*.hbs',
            destination:
              '/home/ryan/Projects/ghost/content/themes/smart/partials'
          },
          {
            source: './assets/built/*.css',
            destination:
              '/home/ryan/Projects/ghost/content/themes/smart/assets/built'
          },
          {
            source: './assets/built/*.js',
            destination:
              '/home/ryan/Projects/ghost/content/themes/smart/assets/built'
          },
          {
            source: './assets/fonts/*.woff2',
            destination:
              '/home/ryan/Projects/ghost/content/themes/smart/assets/fonts'
          }
        ]
      }
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
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      }
    ]
  }
};
