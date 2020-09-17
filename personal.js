var mysql = require('mysql2');

var client = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'Tattoka2017',
  database : 'print-server'
});

client.connect();

function listen(socket){

    socket.on("login", function(req){ g_service(socket, req)});

}

function g_service(socket, req){
    var txt = "call login(?, ?)";
    client.query(txt, [req.phone, req.pass], function(err, res){
        if(err) throw err; var json = res[0];
        socket.emit("g_login", json);
    });
}


exports.listen = listen;
