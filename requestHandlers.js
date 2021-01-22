
fs = require('fs');
var mysql = require('mysql2');

var client = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'ubuntu',
  password : 'Tattoka2017',
  database : 'print-server'
});

function start( req ) {
  console.log("start")
  return "Get Started"
}

function login( req ) {

  var txt = "call login(?, ?)";
  console.log(req.query)
  client.query(txt, [req.query.phone, req.query.pass], function(err, res){
      if(err) throw err; var json = res[0];
      return JSON.stringify(json)
      //socket.emit("login", json);
  });

  console.log("login")
  return "login"

}

function method ( req ) {
  console.log(req.query)
  var txt = "call method( ?, ? )";
  client.query(txt, [req.query.method, JSON.stringify(req.query)], function(err, res){
      if(err) throw err; 
      console.log(res);
      return "result"
      //socket.emit("method_" + req.method, res); 
  });  
  return "method"
}

exports.start = start;
exports.login = login;
exports.method = method;
