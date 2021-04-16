const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const FileManager = require('filemanager-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ExtraWatchWebpackPlugin = require('extra-watch-webpack-plugin');

require('dotenv').config();

const { LOCAL } = process.env;

module.exports = {
  mode: 'development',
  entry: {
    critical: './src/scss/critical.scss',
    app: './src/js/app/index.js',
    post: './src/js/post/index.js',
  },
  output: {
    // filename: '[name].js',
    path: '/home/ryan/Projects/ghost/content/themes/smart/assets/built/',
  },
  devtool: 'inline-source-map',
  plugins: [
    new ExtraWatchWebpackPlugin({
      files: [
        '/author.hbs',
        '/error-404.hbs',
        '/home.hbs',
        '/index.hbs',
        '/assets/hbs/default-template.hbs',
      ],
      dirs: [path.join(__dirname, '/partials')],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: './package.json',
          to: `/home/${LOCAL}/ghost/content/themes/smart/package.json`,
        },
        {
          from: './*.hbs',
          to: `/home/${LOCAL}/ghost/content/themes/smart`,
        },
        {
          from: './partials/*.hbs',
          to: `/home/${LOCAL}/ghost/content/themes/smart/`,
        },
        {
          from: './assets/fonts/*.woff2',
          to: `/home/${LOCAL}/ghost/content/themes/smart/`,
        },
        {
          from: './assets/img/*.svg',
          to: `/home/${LOCAL}/ghost/content/themes/smart/`,
        },
      ],
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
    ],
  },
};
