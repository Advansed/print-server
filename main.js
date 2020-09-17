var io = require('socket.io').listen(3000); 


console.log("io connected on :3000");

io.sockets.on('connection', function (socket) {
    
    io.origins('*:*')
    
    onConnect.connect(socket);
    
    personal.listen(socket);
      
 });