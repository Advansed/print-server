var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/login"] = requestHandlers.login;
handle["/method"] = requestHandlers.method;
console.log(handle);
server.start(router.route, handle);