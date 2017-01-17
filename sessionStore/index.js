var session = require("express-session"),
	RedisStore = require('connect-redis')(session);
	
var sessionMiddleware = session({
  store: new RedisStore({host:'127.0.0.1', port:6379}),
	secret: "Final Year Project AUTH Encryption!",
	resave: false,
	saveUninitialized: false,
});

module.exports = sessionMiddleware;