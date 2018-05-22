'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/login-app')

const app = express();
app.use(bodyParser.json());

app.listen(config.port, err => {
	console.log(`Listening at http://localhost:${config.port}`);
});

console.log('Server started.');

const User = mongoose.model('User', {
	firstName: String,
	lastName: String,
	password: String,
	email: String
});


function login(username, password) {
	return User.findOne({email: username}).exec().then(user => {
		console.log(user);
		if(!user) return false;
		if(user.password === password) return user;
	});

}

app.post('/api/login', (req,res) => {
	console.log(req.body.username);
	return login(req.body.username, req.body.password).then(result => res.json(result));
})
