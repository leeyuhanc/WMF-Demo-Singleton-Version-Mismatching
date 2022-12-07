const HtmlWebpackPlugin = require("html-webpack-plugin")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")

module.exports = {
  name: "remote",
  mode: "development",
  devtool: "cheap-source-map",
  devServer: {
    port: 8081,
  },
  module: {
    rules: [
      {
        // webpack uses babel to transpile js files before bundling
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            // presets are used to tell babel what to transpile. These are predefined configs
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(woff|png|jp(e*)g|svg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(css)$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "remote",
      exposes: {
        "./App": "./src/index",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
}
