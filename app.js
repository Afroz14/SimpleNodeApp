var express  = require('express'),
    app      = express(),
    config   = require('./src/config/config');

// start server
app.listen(config.port, function() {
  console.log(' Server Listening on port : '+ config.port)
})
