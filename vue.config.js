const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  publicPath: "./",
  devServer: {
    overlay: {
      warnings: false,
      errors: false,
    },
  },
  configureWebpack: {
    plugins: [
      new ReactRefreshWebpackPlugin({
        overlay: false,
      }),
    ],
  },
};
