Paypal Test Account
------------------------------------------------------
{
    seller: {
        email: "s20081428-facilitator@gmail.com",
        password: "6Ldw3h6S"
    },
    buyer: {
        email: "s20081428-buyer@gmail.com",
        password: "6Ldw3h6S"
    }
}
-------------------------------------------------------



Before start the server, please follow the instructions below:
1. Start MongoDB(root path): 
   ./mongod
   If there was occured a unclean shutdown error while starting mongodb
   Run "mongod --repair --dbpath data" ,then run "./mongod"

   If MongoDB already running, run "pgrep mongo", and use "kill [pid]" terminate the MongoDB services.

2. Start Redis Server(Session Server)
   Run "sudo service redis-server start"

3. Run application(workspace): 
   node app.js