const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa");
const { VueLoaderPlugin } = require("vue-loader");
// const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "vue-mf",
    projectName: "footer",
    webpackConfigEnv,
    argv,
    // disableHtmlGeneration: true,
  });

  const config = merge(defaultConfig, {
    devServer: {
      server: "https"
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: ["vue-loader"],
        },
      ],
    },
    externals: [/^@vue-mf\/.+/],
    plugins: [new VueLoaderPlugin()],
  });

  return config;
};