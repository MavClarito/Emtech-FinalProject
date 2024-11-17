// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  // Add glb extension to assetExts
  config.resolver.assetExts.push('glb');

  return config;
})();
