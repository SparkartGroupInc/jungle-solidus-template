var solidus = require('solidus');

// Manually start the Solidus server for services that require a start file

var config = {
  port: process.env.PORT
}

if( process.env.DEV ){
  config.dev = true,
  config.log_level = process.env.LOG_LEVEL,
  config.livereload_port = process.env.LIVERELOAD_PORT,
  config.log_server_port = process.env.LOG_SERVER_PORT,
  config.log_server_level = process.env.LOG_SERVER_LEVEL
}

solidus.start(config);