var express = require("express");

var bodyParser = require("body-parser");

var app = express()

app.use(bodyParser.json());

app.get("/hello",(request, respond)=> {
	respond.json({
		"Hello": "Hello Adam", 
		"Syntax": "NO ITS NOT ES6!!!!"
	});

});


app.post("/hello",(request, respond)=> {
	console.log(request.body);

});

app.listen(8080);
console.log("Server is running!");