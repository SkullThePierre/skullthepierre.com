const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: ["./src/index.js"],
  output: {
    path: path.join(__dirname, "public/js"),
    filename: "main.js",
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  optimization: {
    minimize: true,
  },
};
