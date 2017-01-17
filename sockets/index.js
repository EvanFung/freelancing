var express = require('express'),
	app = express(),
  http = require('http').Server(app),
  session = require("express-session"),
	sio = require('socket.io'),
	io = null,
	RedisStore = require("connect-redis")(session),
	sessionMiddleware = require("../sessionStore/");
	
	
var CurrentUsers = [];

exports.io = function () {
  return io;
};

exports.initialize = function(server) {
    io = sio(server);
    
    io.use(function(socket, next) {
      sessionMiddleware(socket.request, socket.request.res, next);
    });
    
    app.use(sessionMiddleware);
    
    io.on('connection', function(socket){
      try{
        socket.user = socket.request.session.passport.user;
      }catch(e){
        socket.user = "guest";
      }
      console.log(socket.user);
    	CurrentUsers.push(socket);
    	
    	socket.on("payment", function(data){
    		 CurrentUsers.forEach(function(CurrentUser){
    		    if (CurrentUser.id == socket.id){
    		      CurrentUser.urlPath = data.urlPath;
    		      return false;
    		    }
    		 });
    	});
    	
    	socket.on('disconnect', function() {
          var i = CurrentUsers.indexOf(socket);
          CurrentUsers.splice(i, 1);
        });
    });
};

exports.getCurrentUsers = function(){
    return CurrentUsers;
}