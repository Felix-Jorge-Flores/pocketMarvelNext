module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["i.annihil.us"],
  },

  webpack: function (config, options) {
    console.log(options.webpack.version); // 5.18.0
    config.experiments = {};
    return config;
  }
}
