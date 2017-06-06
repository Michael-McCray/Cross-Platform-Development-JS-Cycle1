var express = require("express"),
	session = require("express-session"),
	bodyParser = require("body-parser"),
	mongoose = require("mongoose"),
	bcrypt= require("bcrypt-nodejs"),
	User= require("./user"),
	localAuth= require("./auth"),
	hbs = require("hbs"),
	passport= require("passport"),
	app = express(),
	routes = require("./app/routes/routes"),
	path = require(path);


app.use("/statc" , express.static(path.join(__dirname, "app/client")));

app.set("view engine", "hbs");
app.set("views" , path.join(__dirname, "app/views"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(session({
	secret: 'itsASecret',
	resave: true,
	saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

localAuth(passport);







mongoose.connect("mongodb://localhost/User");


app.listen(8080, function() {
	console.log("Server is Running");
});