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
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              "@babel/preset-env",
              ["@babel/preset-react", {
                "runtime": "automatic"
              }]
            ]
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
    extensions: ['.ts', '.tsx', '.js', '.json'],
    symlinks: true,
  },
};