module.exports = {
   isAuthenticated : function(req,res,next){
   	  if (req.session && req.session.user && req.session.user.authenticated){ 
   	  	  return next();
   	  }
   	  else{
   	  	  res.redirect('/login');
   	  }
   }	  
};