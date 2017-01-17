var User = require('./models/user');
var Transaction = require('./models/transaction');

function seedDB(){
    User.remove({}, function(err){
            if (err){
                console.log(err);
            } else {
                console.log("User data have been removed");
            }
    });
    
    Transaction.remove({}, function(err){
            if (err){
                console.log(err);
            } else {
                console.log("Transaction data have been removed");
            }
    });
}

module.exports = seedDB;