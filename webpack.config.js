const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./src/templates/packs/application.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract([
          {
            loader: "css-loader",
            options: {
              url: false,
              sourceMap: true,
              minimize: false,
              importLoaders: 2
            }
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              plugins: () => [require("autoprefixer")]
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ])
      }
    ]
  },
  plugins: [new ExtractTextPlugin("application.css")],
  devtool: "source-map"
};
