var express = require('express'),
	app= express(),
	router = express.Router(),
	User = require("../models/user"),
	passport = require("passport"),
	middleware = require("../middleware/");

router.get("/", function(req, res){
	req.session
	res.render("index");
});

// ===================================
// AUTH ROUTE
// ===================================
router.get("/signup", middleware.chkUserAccessingPage, function(req, res){
	var email = req.query.email;
	if (typeof email !== "undefined"){
		res.render("signup", {email: email});
	} else {
		res.render("signup", {email: ""});
	}
	
});

router.post("/signup", [middleware.chkUserAccessingPage,middleware.chkUserExist], function(req, res){
	var newUser = new User(req.body.user);
	User.register(newUser, req.body.password, function(err, user){
       if (err){
           res.redirect("./signup");
       }else {
       	   req.body.username = user.username;
	       passport.authenticate('local')(req, res, function () {
	            res.redirect('./dashboard');
	       })
       }
    });
});

// ===================================
// LOGIN ROUTE
// ===================================
router.get("/login", middleware.chkUserAccessingPage,function(req, res){
	res.render("login");	
});

router.post("/login", passport.authenticate("local", {
	successRedirect: "/dashboard",
	failureRedirect: "/login",
	failureFlash: 'Invalid username or password.'
}), function(req, res){
});

// ===================================
// LOGOUT ROUTE
// ===================================
router.get("/logout", function(req, res){
	req.logout();
	res.redirect("/");
});

module.exports = router;