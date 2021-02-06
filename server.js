var http = require("http");
var url = require("url");
var express = require('express');
const multer = require('multer')
var cors = require('cors')
var app = express();
const upload = multer()

function start(route, handle) {
  function onRequest(request, response) {
	var pathname = url.parse(request.url).pathname;
	console.log("Request for " + pathname + " received.");

	ret = route(handle, pathname, request, response);

	
  }
	console.log("Request received.");

	app.use(cors())

	app.use(express.urlencoded({
		extended: false
	}));


	app.use(express.json());

	app.get('/', onRequest);
	app.get('/login', onRequest);
	app.post('/method', onRequest);
	app.post('/upload', upload.array('fotos', 12), onRequest);
	   
	app.listen(3000);	
}

exports.start = start;
