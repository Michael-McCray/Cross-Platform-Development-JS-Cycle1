var mangoose = require("mangoose");

var Task = new mangoose.Schema({
	name: String,
	description: String,
	date: date
});

module.exports = mangoose.model("Task", Task);