var MergeConfig = require('merge-config');

/**
 * Merge config files
 * @param  {object} argv A Yargs object of provided arguments
 * @return {object}      A JSON configuration object
 */
module.exports = function (argv) {
  var config = new MergeConfig();

  // load the default config
  config.file('./gulp/config.json');
  // merge a new config file
  if (argv.dev || argv.env === 'dev') config.file('./gulp/config-dev.json');

  return config.get();
};
