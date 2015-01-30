var jungle = require('jungle-solidus/preprocessors');

module.exports = function( context ){
  context = jungle(context);
  return context;
};