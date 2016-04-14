var express = require('express');
var mongojs = require('mongojs');
var bodyParser = require('body-parser');
var app = express(); 


app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

var db = mongojs('tasklist', ['tasklist']);

// ROUTES //
app.get('/tasklist', function(req, res) {
	console.log("I received a GET request");
	db.tasklist.find(function(err, docs) {
		console.log(docs);
		res.json(docs);
	});
});

app.post('/tasklist', function(req, res) {
	console.log(req.body);
	db.tasklist.insert(req.body, function(err, doc) {
		res.json(doc);
	});
});

app.delete('/tasklist/:id', function(req, res) {
	var id = req.params.id;
	console.log(id);
	db.tasklist.remove({_id: mongojs.ObjectId(id)}, function(err, doc) {
		res.json(doc);
	});
});


app.listen(3000);
console.log("server running on port 3000");