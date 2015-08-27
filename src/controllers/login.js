
module.exports = {
	showLogin : function(req,res){
       res.render('auth/login');
	},
	doLogin : function(req,res){
		var password = req.body.password;
		var email    = req.body.email;
		if(password == '1234' && email == "afrozalam267@gmail.com"){
			var user = {'email':email,'authenticated':true};
			req.session.user = user;
            res.redirect('/');
		}
		else{
			  res.redirect('/login');
		}
	},
	logout : function(req,res){
        delete req.session.user;
		res.redirect('/login');
	}
};