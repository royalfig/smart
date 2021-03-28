const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FileManager = require('filemanager-webpack-plugin');
require('dotenv').config();

const LOCAL = process.env.LOCAL;

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
      filename: '[name].css'
    }),
    new FileManager({
      events: {
        onEnd: {
          copy: [
            {
              source: './package.json',
              destination: `/home/${LOCAL}/projects/ghost/content/themes/smart/package.json`
            },
            {
              source: './*.hbs',
              destination: `/home/${LOCAL}/projects/ghost/content/themes/smart`
            },
            {
              source: './partials/*.hbs',
              destination: `/home/${LOCAL}/projects/ghost/content/themes/smart/partials`
            },
            {
              source: './assets/built/*.css',
              destination: `/home/${LOCAL}/projects/ghost/content/themes/smart/assets/built`
            },
            {
              source: './assets/built/*.js',
              destination: `/home/${LOCAL}/projects/ghost/content/themes/smart/assets/built`
            },
            {
              source: './assets/fonts/*.woff2',
              destination: `/home/${LOCAL}/projects/ghost/content/themes/smart/assets/fonts`
            },
            {
              source: './assets/img/*.svg',
              destination: `/home/${LOCAL}/projects/ghost/content/themes/smart/assets/img`
            }
          ]
        }
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
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: path.join(__dirname, 'assets', 'built')
            }
          }
        ]
      }
    ]
  }
};
