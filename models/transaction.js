var mongoose = require('mongoose');

var TransactionSchema = new mongoose.Schema({
    id: String,
	type: String,
	status: String,
	amount: Number,
	orderTime: Date,
	paymentTime: Date
});

module.exports = mongoose.model("Transaction", TransactionSchema);