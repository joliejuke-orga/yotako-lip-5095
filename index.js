'use strict';


const fs = require('fs');
const express = require('express');
const app = express();


app.use('/', express.static(__dirname + '/html'));


app.get('/', function(req, res, next) {

	const VIEWS_DIR = `${__dirname}/html`;

	fs.readdir(VIEWS_DIR, (err, files) => {
		let firstFile = files[0];
		let filePath = `${VIEWS_DIR}/${firstFile}`;
		res.sendFile(filePath);
	});
});


app.get('/css/style.css', function(req, res, next) {

	const VIEWS_DIR = `${__dirname}/css`;
	fs.readdir(VIEWS_DIR, (err, files) => {
		let firstFile = files[0];
		let filePath = `${VIEWS_DIR}/${firstFile}`;
		res.sendFile(filePath);
	})
});


app.listen(process.env.PORT || 8080);
