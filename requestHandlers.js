
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

function login( req, res ) {

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

async function get_info(req, callback){
      
}


//usage



function method ( req, res ) {
  console.log(req.query)
  var sql = "call method( ?, ? )";

  client.query(sql, [req.query.method, JSON.stringify(req.query)], function(err, result){
        if (err)   throw err;
        res.writeHead(200, {"Content-Type": "text/json"});
        //response.write("write end");
        //response.send(ret)
        res.end(result);
      
  })
  return "method"
}

exports.start   = start;
exports.login   = login;
exports.method  = method