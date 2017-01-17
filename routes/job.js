var express = require('express'),
	app= express(),
	router = express.Router(),
	User = require("../models/user"),
	passport = require("passport"),
	middleware = require("../middleware/");

router.get("/post-project", [middleware.isLoggedIn, middleware.isJobProvider],function(req, res){
	res.render("./post-project");
});


module.exports = router;