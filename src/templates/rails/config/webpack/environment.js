// see: https://github.com/rails/webpacker/blob/master/docs/webpack.md

const { environment } = require("@rails/webpacker");
const customConfig = require("./custom");
const webpack = require("webpack");

// Merge custom config
environment.config.merge(customConfig);

// Add an additional plugin of your choosing : ProvidePlugin
environment.plugins.prepend(
  "Provide",
  new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery",
    jquery: "jquery",
    Popper: ["popper.js", "default"],
    Util: ["exports-loader?Util!bootstrap/js/dist/util"]
  })
);

module.exports = environment;
