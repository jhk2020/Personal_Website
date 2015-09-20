var express = require('express');
var app = express();

app.use(express.static(__dirname + "/client"));

app.get('/', function(request, response) {
	response.sendFile('index.html');
});

app.listen(5000, function() {
	console.log('Listening to 5000...');
})