var http = require("http");
var url = require("url");
var express = require('express');
var app = express();

function start(route, handle) {
  function onRequest(request, response) {
	var pathname = url.parse(request.url).pathname;
	console.log("Request for " + pathname + " received.");

	ret = route(handle, pathname, request);
	
    response.writeHead(200, {"Content-Type": "application/json"});
    response.write(JSON.stringify(ret));
	response.end(ret);
	
  }
	console.log("Request received.");
	app.use('/Static', express.static('./server'));
	app.get('/', onRequest);
	app.get('/login', onRequest);
	app.listen(3000);	
}

exports.start = start;
