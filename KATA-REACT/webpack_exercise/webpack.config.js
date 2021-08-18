const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
/**
 * WEBPACK
 * entry
 * output
 * modules
 * plugins
 * mode (envs)
 */
module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      // las reglas que se cargan por medio de loaders
      {
        test: /\.html/, // lo que se tiene que buscar
        use: [
          // como lo va a aplicar
          {
            loader: "html-loader",
            options: {
              minimize: true,
            },
          },
        ],
      },
      {
        test: /\.css|.scss$/i,
        use: ["style-loader", "css-loader",],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./index.html",
      // filename: "./principal.html"
    }),
  ],
  // mode: 'production',
};
