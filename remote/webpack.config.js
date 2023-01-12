const HtmlWebpackPlugin = require("html-webpack-plugin")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const deps = require("./package.json").dependencies

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
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App",
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: `>=${deps["react"]}`,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: `>=${deps["react-dom"]}`,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
}
