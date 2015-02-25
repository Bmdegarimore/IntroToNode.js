//server.js

var http = require('http');
var express = require('express');
var app = express();

//Create a Server using express
http.createServer(app).listen(8080);

//Set up a static file directory to serve files
app.use(express.static(__dirname + "/client_files"));
app.use(express.urlencoded());
app.use(express.json());

//Set up routes
app.get("/", function(req, res) {
	res.send("Welcome!");
});
app.get("/page1", function(req, res) {
	res.send("This is page 1");
});
app.get("/page2", function(req, res) {
	res.send("This is page 2");
});

//Handle a post to the server
app.post("/greetings", function (req, res) {



	name = req.body.name;
	message = "The server says Hello, " + name + "!";
	console.log(message);
	res.json({"response": message});
});
