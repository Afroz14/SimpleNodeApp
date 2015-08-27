"use strict" ;
var express  = require('express'),
    app      = express(),
    config   = require('./src/config/config'),
    swig     = require('swig'),
    router   = require('./src/controllers/index'),
    bodyParser = require('body-parser'),
    session   = require('express-session');

app.use(express.static(__dirname + '/public'));
app.use( bodyParser.json() );  
app.use(bodyParser.urlencoded({  extended: true }));
app.use(session({secret: 'keyboard cat',resave: true,saveUninitialized: true}));
app.use(router);


// template setting : We are using swig
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/src/views');
app.set('view cache', false);
swig.setDefaults({ cache: false });






// start server
app.listen(config.port, function() {
  console.log(' Server Listening on port : '+ config.port)
})
