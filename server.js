var http = require("http");
var url = require("url");
var express = require('express');
var cors = require('cors')
var app = express();

function start(route, handle) {
  function onRequest(request, response) {
	var pathname = url.parse(request.url).pathname;
	console.log("Request for " + pathname + " received.");
	console.log(request.body)

	ret = route(handle, pathname, request, response);
	
    //response.writeHead(200, {"Content-Type": "text/json"});
	//response.write("write end");
	//response.send(ret)
	//response.end(ret);
	
  }
	console.log("Request received.");
	//app.use('/Static', express.static('./server'));
	// app.use(function(req, res, next) {
	// 	res.header("Access-Control-Allow-Origin", "*");
	// 	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	// 	next();
	//   });
	app.use(cors())
	app.get('/', onRequest);
	app.get('/login', onRequest);
	//app.get('/method', onRequest);
	app.post('/method', onRequest);
	app.listen(3000);	
}

exports.start = start;
