var path = require('path');

module.exports = function (filepath) {
  return path.basename(filepath, '.task.js');
};
