var http = require("http");
var url = require("url");
var express = require('express');
var app = express();

function start(route, handle) {
  function onRequest(request, response) {
	var pathname = url.parse(request.url).pathname;
	console.log("Request for " + pathname + " received.");

    ret = route(handle, pathname, request);

	console.log(ret)

    response.writeHead(200, {"Content-Type": "application/json"});
    response.write(ret);
	response.end();
	
  }
	console.log("Request received.");
	app.use('/Static', express.static('./server'));
	app.get('/', onRequest);
	app.listen(8888);	
}

exports.start = start;
