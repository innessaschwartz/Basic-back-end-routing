'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');

const app = express();
app.use(bodyParser.json());

app.listen(config.port, err => {
	console.log(`Listening at http://localhost:${config.port}`);
});

console.log('Server started.');


/**************************************************************************************************
 * Example routes
 *************************************************************************************************/

// GET route to the current server time
app.get('/api/example/time', (req,res) => {
	res.json({
		time: Date.now(),				// Number of milliseconds since Jan 1 1970 (the Unix Epoch)
		text: Date().toString()			// Date as a string
	});
});

// GET route to return the number of seconds the server (this node program) as been up.
app.get('/api/example/uptime', (req,res) => {
	res.json({uptime:process.uptime()});
});

// A simple counter that increases each time the route is triggered
var count = 0;
app.get('/api/example/count', (req,res) => {
	count++;			// Increase the count by 1
	res.json({
		count: count	// Return the new count
	});
});

// POST request that echoes back the text sent
app.post('/api/example/echo', (req,res) => {
	var text = req.body.text;					// req.body is the object POSTed to the route
	res.json({
		original: text,
		caps: text.toUpperCase()
	});
});
