const rewireSass = require('react-app-rewire-sass');

module.exports = function override(config, env) {
  config = rewireSass(config, env);
  return config;
};
