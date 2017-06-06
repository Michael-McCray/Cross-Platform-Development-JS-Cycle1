var mongoose = require("mongoose");

var User = new mongoose.Schema({
	username: String,
	password: String,
	img: { data: Buffer, contentType: String }
});

module.exports = mongoose.model("User", User);