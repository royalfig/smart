const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
var ZipPlugin = require("zip-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: { app: "./src/index.js", post: "./src/post.js" },

  output: {
    filename: "assets/js/[name].js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "assets/css/[name].css"
    }),
    new CopyWebpackPlugin([
      { context: __dirname + "/src", from: "*.hbs" },
      { context: __dirname + "/src/partials", from: "*.hbs", to: "partials" },
      { context: __dirname + "/src/fonts", from: "*", to: "assets/fonts" },
      { context: __dirname + "/src", from: "package.json" }
    ]),
    new ZipPlugin({
      path: __dirname,
      filename: "default.zip"
    }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      }
    ]
  }
};
