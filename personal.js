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

    socket.on("franchaise",     function(req){ franchaise(socket, req)});

    socket.on("s_service",      function(req){ s_service(socket, req)});

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
    var txt = "select name, 'radio' type, name label, name value, false checked from cargos";
    client.query(txt, function(err, res){
        if(err) throw err; 
        socket.emit("cargos", res);
    });
}

function franchaise(socket, req){
    var txt = "call franchaise";
    client.query(txt, function(err, res){
        if(err) throw err; 
        socket.emit("franchaise", res[0]);
    });
}

function s_service(socket, req){
    console.log("s_service")
    console.log(req);
    var txt = "call s_service";
    client.query(txt, JSON.stringify(req), function(err, res){
        if(err) throw err; 
    });
}



exports.listen = listen;
