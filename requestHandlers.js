
fs = require('fs');
var mysql = require('mysql2');

var client = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'ubuntu',
  password : 'Tattoka2017',
  database : 'print-server'
});

var w_client = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'ubuntu',
  password : 'Tattoka2017',
  database : 'my-wish'
});

function start( req ) {
  console.log("start")
  return "Get Started"
}

function login( req, res ) {

  var txt = "call login(?, ?)";
  console.log(req.body)
  client.query(txt, [req.body.phone, req.body.pass], function(err, res){
      if(err) throw err; var json = res[0];
      return JSON.stringify(json)
      //socket.emit("login", json);
  });

  return "login"

}

async function get_info(req, callback){
      
}

function method ( req, res ) {
  console.log(req.body)
  var sql = "call method( ?, ? )";

  client.query(sql, [req.body.method, JSON.stringify(req.body)], function(err, result){
    if (err)   throw err;
    
    res.writeHead(200, {"Content-Type": "text/json"});

    console.log(result)

    res.end(JSON.stringify(result));
      
  })

}

function w_method ( req, res ) {
  console.log(req.body)
  var sql = "call method( ?, ? )";

  w_client.query(sql, [req.body.method, JSON.stringify(req.body)], function(err, result){
    if (err)   throw err;
    
    res.writeHead(200, {"Content-Type": "text/json"});

    console.log(result)

    res.end(JSON.stringify(result));
      
  })

}

exports.start   = start;
exports.login   = login;
exports.method  = method