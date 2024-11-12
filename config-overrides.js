const webpack = require('webpack');

module.exports = function override(config) {
  config.resolve.fallback = {
    "fs": false, // Completely ignore fs
    'get-uri': false,
    "path": require.resolve("path-browserify"),
    "stream": require.resolve("stream-browserify"),
    "crypto": require.resolve("crypto-browserify"),
    "os": require.resolve("os-browserify/browser"),
    "https": require.resolve("https-browserify"),
    "http": require.resolve("stream-http"),
    "url": require.resolve("url"),
    "assert": require.resolve("assert"),
    "constants": require.resolve("constants-browserify"),
    "zlib": require.resolve("browserify-zlib"),
    "process": require.resolve("process/browser"),
    "net": false,
    "tls": false,
    "child_process": false,
    "dns": false,
    "readline": false,
    "module": false
  };

  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
      'process': 'process/browser'
    })
  ]);

  return config;
};
