const withImages = require("next-images");

module.exports = {
  webpack: (config, { defaultLoaders }) => {
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

    return config;
  },
  withImages: withImages()
};
