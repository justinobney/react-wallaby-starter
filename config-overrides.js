const {rewireEmotion} = require('react-app-rewire-emotion');
const rewireReactHotLoader = require('react-app-rewire-hot-loader');
var DashboardPlugin = require('webpack-dashboard/plugin');

/* config-overrides.js */
module.exports = function override(config, env) {
  let modifiedConfig = rewireEmotion(config, env);

  if (env === 'development') {
    modifiedConfig = rewireReactHotLoader(modifiedConfig, env);
    modifiedConfig.plugins = (modifiedConfig.plugins || []).concat([
      new DashboardPlugin(),
    ]);
  }

  return modifiedConfig;
};
