var mongoose = require("mongoose");

var User = new mongoose.Schema({
	name: String,
	pasword: String
});

module.exports = mongoose.model("User", User);