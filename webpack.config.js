const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: { main: "./src/index.js", videosPage: "./src/js/videos-page.js" },
  output: {
    path: path.join(__dirname, "public/js"),
    filename: "[name].js",
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
