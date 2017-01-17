var User = require("../models/user");

var middlewareObj = {};

middlewareObj.isLoggedIn = function (req, res, next){
	if (req.isAuthenticated()){
		return next();
	}
	req.flash("error", "You must login before access dashboard.");
	res.redirect("/login");
}

middlewareObj.isJobProvider = function (req, res, next){
	if (req.user.type=="Job provider"){
		return next();
	}
	req.flash("error", "You have not permission to do that.");
	res.redirect("back");
}

middlewareObj.chkUserAccessingPage = function (req, res, next){
	if (req.isAuthenticated()){
		res.redirect("/dashboard");
	}
	return next();
}

middlewareObj.chkUserExist = function(req, res, next){
	var username = req.body.user['username'];
	var email = req.body.user['email'];
	
	User.findOne({username: username}, function(err, user){
		if (err){
			console.log(err);
		}else if (user){
			req.flash("error", "The username is exist. Please try the other one.");
			return res.redirect("/signup");
		} else {
			User.findOne({email: email}, function(err, user){
				if (err){
					console.log(err);
				}else if (user){
					req.flash("error", "The email is exist. Please try the other one.");
					return res.redirect("/signup");
				} else {
					return next();
				}
			});
		}
	});
}

module.exports = middlewareObj;