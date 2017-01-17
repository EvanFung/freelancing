var mongoose = require('mongoose'),
	passwordLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
	type: String,
	firstName: String,
	lastName: String,
	country: String,
	email: String,
	username: String,
	password: String,
	balance: { type: Number, default: 0 },
	transactions: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Transaction"
		}
	]
});

UserSchema.plugin(passwordLocalMongoose);

module.exports = mongoose.model("User", UserSchema);