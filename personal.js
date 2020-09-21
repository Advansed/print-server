var mysql = require('mysql2');

var client = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'ubuntu',
  password : 'Tattoka2017',
  database : 'print-server'
});

client.connect();

function listen(socket){

    socket.on("login",          function(req){ login(socket, req)});

    socket.on("registration",   function(req){ registration(socket, req)});

    socket.on("services",       function(req){ services(socket, req)});

    socket.on("cargos",         function(req){ cargos(socket, req)});

}

function login(socket, req){
    var txt = "call login(?, ?)";
    console.log(req)
    client.query(txt, [req.phone, req.pass], function(err, res){
        if(err) throw err; var json = res[0];
        socket.emit("login", json);
    });
}

function registration(socket, req){
    var txt = "call registration(?)";
    client.query(txt, JSON.stringify(req), function(err, res){
        if(err) throw err; var json = res[0];
        socket.emit("registration", json);
    });
}

function services(socket, req){
    var txt = "select * from services";
    client.query(txt, function(err, res){
        if(err) throw err; 
        socket.emit("services", res);
    });
}

function cargos(socket, req){
    var txt = "select * from cargos";
    client.query(txt, function(err, res){
        if(err) throw err; 
        socket.emit("cargos", res);
    });
}
exports.listen = listen;
