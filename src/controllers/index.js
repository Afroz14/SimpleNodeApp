/*
  This file holds all your routes. This is the only router that your application has to load at startup.
*/

var express = require('express'),
    router  = express.Router(),
    loginController = require('./login');

router.get('/', loginController.login);

module.exports = router;