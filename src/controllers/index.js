/*
  This file holds all your Application routes. This is the only router that your application has to load at startup.
*/

var express = require('express'),
    router  = express.Router(),
    loginController = require('./login'),
    homeController = require('./home'),
    auth =  require('../middlewares/auth');


router.post('/authenticate',loginController.doLogin)
router.get('/login',loginController.showLogin);
router.get('/',auth.isAuthenticated, homeController.show);
router.get('/logout',loginController.logout);

module.exports = router;