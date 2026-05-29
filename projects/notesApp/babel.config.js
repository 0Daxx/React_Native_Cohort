module.exports = function (api) {
  api.cache(true);
  let plugins = [];

  // Enable worklets plugin since react-native-worklets is in dependencies
  plugins.push('react-native-worklets/plugin');

  return {
    presets: [
      ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
      'nativewind/babel'
    ],
    plugins,
  };
};
