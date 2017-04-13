var express = require('express')
var app = express()
var path = require('path')

app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_components')));

var port = process.env.PORT || 8000
app.listen(port, function() {
	console.log('Running at LOCALHOST: 127.0.0.1:'+port)
})
