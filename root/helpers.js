var _ = require('underscore');
var requireDir = require('require-dir');
var jungle_helpers = require('jungle-solidus/helpers');

// Require all helpers in /helpers. To add a new helper, just create a module
// in the /helpers directory
module.exports = _.extend(jungle_helpers, requireDir('./helpers'));