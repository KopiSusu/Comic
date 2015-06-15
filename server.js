var http = require('http');
var express = require('express');
var fs = require('fs');
var path = require('path');
var app     = express();

app.use('/', express.static(path.join(__dirname, 'public')));

app.get('*', function(req, res) {
	res.sendfile('public/main.html');
});

app.listen(8000);