var jungle = require('jungle-solidus/preprocessors/site');

module.exports = function( context ){
  context = jungle(context);
  return context;
};