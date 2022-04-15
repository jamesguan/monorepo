// https://dev.to/riyanegi/setting-up-webpack-5-with-react-and-babel-from-scratch-2021-271l
// https://github.com/zloirock/core-js

// https://webpack.js.org/guides/asset-management/
const webpack = require('webpack');
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const env = dotenv.config();

// NAMESPCED VARIABLES: for specific variables only
const NAMESPACES = ['NODE_', 'REACT_']; // add your approved namespaces here...
process.env = Object.entries({ ...process.env }).reduce((acc, [key, value]) => {
  const hasValidNamespace = NAMESPACES.some((namespace) =>
    key.includes(namespace)
  );
  if (hasValidNamespace) {
    return {
      ...acc,
      [key]: value,
    };
  } else {
    return {
      ...acc,
    };
  }
}, {});

module.exports = {
  entry: { index: path.resolve(__dirname, "./src", "index.js") },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env)
    }),
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
        test: /\.s[ac]ss|css$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
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