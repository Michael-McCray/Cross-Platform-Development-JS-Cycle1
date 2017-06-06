
var post = require("../../models/blogpost");





newPost = function(req, res) {
	new blogPost ({
		title: req.body.title,
		post: req.body.post,
		date: new Date()
	}).save(function(err) {
		if(err){
			console.log(err);
		}else {
			res.redirect("/index");
		}
	});
};