// metro.config.js
const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig();

  return {
    transformer: {
      // Use the CSS transformer for .css files
      babelTransformerPath: require.resolve('react-native-css-transformer'),
    },
    resolver: {
      // Keep existing asset extensions but tell Metro to treat .css as source
      assetExts: assetExts.filter(ext => ext !== 'css'),
      sourceExts: [...sourceExts, 'css'],
    },
  };
})();

