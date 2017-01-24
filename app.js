var express = require('express'),
	app= express(),
	http = require('http').Server(app),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	passport = require('passport'),
	LocalStrategy = require('passport-local'),
	User = require('./models/user'),
	io = require('./sockets/').initialize(http),
	session = require("express-session"),
	sessionMiddleware = require("./sessionStore/"),
	flash = require('connect-flash'),
	methodOverride = require('method-override'),
	seedDB = require("./seeds");

var indexRoutes = require("./routes/index"),
	dashboardRoutes = require("./routes/dashboard"),
	adminRoutes = require("./routes/admin");
	jobRoutes = require("./routes/job");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/freelance_matching_system");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(sessionMiddleware);
app.use(flash());
app.use(methodOverride("_method"));

//RESET DATABASE
// seedDB();
//PASSPORT CONFIG

app.set('port',process.env.PORT || 3000);

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
	res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
	res.locals.success = req.flash("success");
	next();
});

app.use(indexRoutes);
app.use(dashboardRoutes);
app.use(jobRoutes);
app.use(adminRoutes);

http.listen(app.get('port'), process.env.IP, function(){
	console.log("Freelance Matching System is RUNNING");
});
