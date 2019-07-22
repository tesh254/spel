const withImages = require("next-images");
const webpack = require("webpack");
require("dotenv").config();

module.exports = {
  webpack: (config, { defaultLoaders }) => {
    const env = Object.keys(process.env).reduce((acc, curr) => {
      acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
      return acc;
    }, {});

    config.module.rules.push(
      {
        test: /\.scss$/,
        use: [
          defaultLoaders.babel,
          {
            loader: require("styled-jsx/webpack").loader,
            options: {
              type: "scoped"
            }
          },
          "sass-loader"
        ]
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      }
    );

    config.plugins.push(new webpack.DefinePlugin(env));

    return config;
  },
  withImages: withImages()
};
