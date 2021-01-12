var personal = require("./personal");
const io = require('socket.io')(3000);

io.on('connection', socket => {
    console.log("io connected on :3000");
    personal.listen(socket)
});

// var io = require('socket.io').listen(3000); 

// io.origins('*:*')

// console.log("io connected on :3000");

// io.sockets.on('connection', function (socket) {
    
//     personal.listen(socket);
      
//  });