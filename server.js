// var server = require('http').createServer(handler);
// var fs = require('fs');

// function handler(req,res){
// 	res.writeHead(200, {'Content-Type': 'text/html'});
// 	res.write(fs.readFileSync(__dirname + '/index.html'));
// 	res.end();
// }

// server.listen(8080, function(){
// 	console.log('server is listening');
// });

// var http = require('http');
// var ecstatic = require('ecstatic')({root: __dirname + '/public'});

// ////////////
// // SERVER //
// ///////////
// http.createServer(function (req, res) {
// 	ecstatic(req,res);
// }).listen(process.env.PORT || 5000);
 
var currentPort = process.env.PORT || 5000;
console.log('Server running on port '+currentPort);

var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use('/', express.static(path.join(__dirname + '/public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/library.json', function(req, res) {
  fs.readFile('_library.json', function(err, data) {
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  });
});

app.post('/library.json', function(req, res) {
  fs.readFile('_library.json', function(err, data) {
    var comments = JSON.parse(data);
    comments.push(req.body);
    fs.writeFile('_library.json', JSON.stringify(comments, null, 4), function(err) {
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Cache-Control', 'no-cache');
      res.send(JSON.stringify(comments));
    });
  });
});

app.listen(currentPort);