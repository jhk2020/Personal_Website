var express = require('express');
var app = express();

app.use(express.static(__dirname + "/client"));

app.get('/', function(request, response) {
	response.render('index.html');
});

app.listen(process.env.PORT || 5000, function() {
	console.log('Listening to 5000...');
})