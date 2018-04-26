var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');

var route = require('./routes/routes');

var app = express();

// middle-ware
app.use(cors());

// body-parser
app.use(bodyParser.json());

// static files
app.use(express.static(__dirname + '/public/'));

// routes
app.use('/api', route);

// start server
app.listen(3000, function(){
	console.log('server listening at port http://localhost:3000');
});