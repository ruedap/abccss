const path = require("path");

const scssPath = path.resolve(__dirname, "../src/templates/stylesheets");

module.exports = (config, env) => {
  const rules = config.module.rules;

  rules.push({
    test: /\.scss$/,
    loaders: [
      "style-loader",
      "css-loader",
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
          includePaths: [scssPath]
        }
      }
    ],
    include: scssPath
  });

  rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [
      {
        loader: require.resolve("@storybook/addon-storysource/loader"),
        options: {
          prettierConfig: {
            printWidth: 80,
            trailingComma: "none",
            singleQuote: false
          }
        }
      }
    ],
    enforce: "pre"
  });

  return config;
};
