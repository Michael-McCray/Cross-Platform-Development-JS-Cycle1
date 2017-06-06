var mongoose = require("mongoose");

var User = new mongoose.Schema({
	name: String,
	pasword: String,
	token: String
});

module.exports = mongoose.model("User", User);