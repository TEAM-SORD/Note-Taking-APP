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

var http = require('http');
var ecstatic = require('ecstatic')({root: __dirname + '/Public'});

////////////
// SERVER //
///////////
http.createServer(function (req, res) {
	ecstatic(req,res);
}).listen(process.env.PORT || 8000);
 
var currentPort = process.env.PORT || 8000;
console.log('Server running on port '+currentPort);