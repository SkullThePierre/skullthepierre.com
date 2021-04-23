const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: [
    "./src/js/load-changes.js",
    "./src/js/replace-logo.js",
    "./src/js/submit-form.js",
  ],
  output: {
    path: path.join(__dirname, "public/js"),
    filename: "main.js",
  },
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

new webpack.ProvidePlugin({
  $: "jquery",
});
