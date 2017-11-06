const rewireEmotion = require('react-app-rewire-emotion');
var DashboardPlugin = require('webpack-dashboard/plugin');

/* config-overrides.js */
module.exports = function override(config, env) {
  const modifiedConfig = rewireEmotion(config, env);

  if (env === 'development') {
    modifiedConfig.plugins = (modifiedConfig.plugins || []).concat([
      new DashboardPlugin(),
    ]);
  }

  return modifiedConfig;
};
