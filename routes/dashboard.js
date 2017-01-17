var express = require('express'),
	app = express(),
	User = require('../models/user'),
	router = express.Router(),
	middleware = require("../middleware/"),
	Paypal = require('paypal-express-checkout'),
	randtoken = require('rand-token'),
	Transaction = require('../models/transaction'),
	io = require("../sockets/").io(),
	currentUsers = require("../sockets/").getCurrentUsers();


var paypal = Paypal.init('s20081428-facilitator_api1.gmail.com', 'R72DVPDQUL2GJC8Z', 'AFcWxV21C7fd0v3bYYYRCpSSRl31A5iBT42og6dVd8WcEbfHabBWj98g', 'http:///freelance-matching-system-s20081428.c9users.io/dashboard/billing/return', 'http:///freelance-matching-system-s20081428.c9users.io/dashboard/billing/cancel', true);
// ===================================
// DASHBOARD ROUTE
// ===================================
router.get("/dashboard", middleware.isLoggedIn, function(req, res){
    res.render("./dashboard/index");
});

router.get("/dashboard/my-info", middleware.isLoggedIn, function(req, res){
    res.render("./dashboard/my-info");
});

router.put("/dashboard/my-info", middleware.isLoggedIn, function(req, res){
	User.findOneAndUpdate({username: req.body.username},req.body.user , function(err, user){
		if (err){
			console.log(err);
		}else{
			req.flash("success", "The personal Information updated successful!");
			res.redirect("./my-info");
		}		
	});
});

router.get("/dashboard/billing/deposit", middleware.isLoggedIn, function(req, res){
    res.render("./dashboard/billing/deposit");
});

router.post("/dashboard/billing/deposit/", function(req, res){
	if (req.body.method == "paypal"){
		var invoiceNo = randtoken.generate(20);
		var amount = Number(req.body.amount);
		var description = "Deposit to ECJob.com";
		var currency = "HKD";
		var requireAddress = false;
		var socketid = getSocketId(req);

		paypal.pay(invoiceNo, amount, description, currency, requireAddress, function(err, url) {
		    if (err) {
		        console.log(err);
		        return;
		    }
		    var data = {
		    	id: invoiceNo,
				type: "Paypal",
				status: "Waiting for paid",
				amount: amount,
				orderTime: new Date()
		    }
		    Transaction.create(data, function(err,data){
		    	if (err){
		    		console.log(err);
		    	} else {
		    		User.findById(req.user._id, function(err, user){
		    			if (err){
		    				console.log(err);
		    			} else {
		    				user.transactions.push(data);
		    				user.save(function(err,data){
		    					if (err){
		    						console.log(err);
		    					} 
		    				});
		    			}	
		    		});
		    	}
		    });
			io.sockets.connected[socketid].emit("paymentData", {invoiceNo: invoiceNo, paymentUrl: url});
		    // redirect to paypal webpage
		    res.redirect(url);
		});
	} else if (req.body.method == "bank"){
		
	}
});

router.get("/dashboard/billing/return", function(req, res){
	var token = req.query.token;
	var PayerID = req.query.PayerID;

	paypal.detail(token, PayerID, function(err, data, invoiceNumber, price) {

    if (err) {
        console.log(err);
        return;
    }

    if (data.success){
    	User.findById(req.user._id, function(err, user){
    		if (err){
    			console.log(err);
    		} else {
    			user.balance += Number(price);
    			user.save(function(err, saveUser){
    				if (err){
    					console.log(err);
    				} else {
    					Transaction.findOne({id: invoiceNumber}, function(err, transaction){
				        	transaction.paymentTime = new Date(data.PAYMENTINFO_0_ORDERTIME);
				        	transaction.status = "Success";
				        	transaction.save(function(err, data){
				        		if (err){
				        			console.log(err);
				        		}
				        		var socketid = getSocketId(req);
								
				        		io.sockets.connected[socketid].emit("payment-result", {status: "success"});
				        		res.redirect("/dashboard/billing/transaction");
				        	});
				        });
    				}	
    			});
    		}	 
    	});
        
    }else{
        console.log('SOME PROBLEM:', data);
    }
    
	});
});

router.get("/dashboard/billing/withdraw", middleware.isLoggedIn, function(req, res){
    res.render("./dashboard/billing/withdraw");
});

router.get("/dashboard/billing/transaction", middleware.isLoggedIn, function(req, res){
	User.findById(req.user._id).populate("transactions").exec(function(err, foundUser){
        if(err){
            console.log(err);
        } else {
            res.render("./dashboard/billing/transaction", {transactions: foundUser.transactions});
        }
    });
});

function getSocketId(req){
	var socketId;
	currentUsers.forEach(function(currentUser){
		if ((currentUser.user == req.user.username)&& currentUser.urlPath=="/dashboard/billing/deposit"){
		    socketId = currentUser.id;
		    return false;
		}	
	});
	return socketId;
}

module.exports = router;