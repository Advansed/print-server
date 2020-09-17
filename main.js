var personal = require("./personal");

var io = require('socket.io').listen(3000); 

io.origins('*:*')

console.log("io connected on :3000");

io.sockets.on('connection', function (socket) {
    
    personal.listen(socket);
      
 });