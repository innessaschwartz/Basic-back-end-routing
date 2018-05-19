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

const username='innessa.schwartz';
const password='utah2018'

app.post('/api/login', (req,res) => {
	console.log(req.body.username);
	if(username === req.body.username && password === req.body.password) {
		res.json('You have successfully logged yourself in!')
	} else {
		res.json('incorrect username or password!')
	}
})
