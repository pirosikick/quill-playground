const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "inline-source-map",
  output: {
    filename: "[name].[contentHash].s"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  plugins: [
    new HTMLPlugin({
      template: path.join(__dirname, "src/index.html")
    })
  ],
  devServer: {
    proxy: [
      {
        context: () => true,
        target: "http://localhost:5000"
      }
    ]
  }
};
