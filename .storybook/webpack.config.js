const config = require("@rails/webpacker/package/config");
const environment = require("../src/templates/rails/config/webpack/environment");

module.exports = (storybookBaseConfig, configType) => {
  const babelLoader = environment.loaders.get("babel");
  babelLoader.use = [
    { loader: "babel-loader", options: { presets: ["react"], babelrc: false } }
  ];

  // NOTE: fingerprint(digest)無しのアセットファイルを出力するための設定
  const fileLoader = environment.loaders.get("file");
  fileLoader.use.push({
    loader: "file-loader",
    options: {
      name: "[path][name].[ext]",
      context: "app/javascript"
    }
  });

  // @storybook/addon-storysource
  const storybookStorysourceAddon = {
    test: /stories\/.*\.jsx?$/,
    loaders: [require.resolve("@storybook/addon-storysource/loader")],
    enforce: "pre"
  };

  const rules = [
    babelLoader,
    environment.loaders.get("css"),
    environment.loaders.get("sass"),
    environment.loaders.get("moduleCss"),
    environment.loaders.get("moduleSass"),
    fileLoader,
    storybookStorysourceAddon
  ];

  storybookBaseConfig.module.rules.push(...rules);
  storybookBaseConfig.resolve.extensions.push(".scss");

  const usePlugins = ["ExtractText", "Provide"];
  environment.plugins.forEach(plugin => {
    if (usePlugins.includes(plugin.key)) {
      storybookBaseConfig.plugins.push(plugin.value);
    }
  });

  return storybookBaseConfig;
};
