// https://dev.to/riyanegi/setting-up-webpack-5-with-react-and-babel-from-scratch-2021-271l
// https://github.com/zloirock/core-js
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: { index: path.resolve(__dirname, "./src", "index.js") },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src", "index.html"),
    }),
    /*
    new CopyPlugin({
      patterns: [
        { from: "./public", to: "./" },
      ],
    }),
    */
  ],
  module: {
    rules: [
      {
        test: /\.m?(j|t)sx?$/,
        exclude: [/nodeModules/, /core-js/
      ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ["@babel/preset-env", {
                "useBuiltIns": "usage",
                "corejs": 3,
                "targets": "ie >= 8"
              }],
              ["@babel/preset-react", {
                "runtime": "automatic"
              }],
            ],
            plugins: [
              [
                "@babel/plugin-transform-runtime",
                {
                  corejs: 3,
                  regenerator: true,
                }
              ]
            ],
            sourceType: "unambiguous",
          }
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  optimization: {
    splitChunks: { chunks: "all" },
  },
  output: {
    path: path.resolve(__dirname, "./", "build"),
  },
  resolve: {
    modules: [
      'node_modules',
    ],
    extensions: ['.ts', '.tsx', '.js', '.jsx','.json'],
    symlinks: true,
  },
};