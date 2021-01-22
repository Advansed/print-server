
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

function get_info(req, callback){
      
  var sql = "call method( ?, ? )";

  client.query(sql, [req.method, JSON.stringify(req.query)], function(err, res){
        if (err)   throw err;
        result_1 = res;  // Scope is larger than function
        return callback(res);
})
}


//usage



function method ( req ) {
  console.log(req.query)
  var result_1 = '';

  let res = await get_info(req.query, function(result){
    return result; 
    //rest of your code goes in here
  });
  console.log(res); // good
  return result_1
}

exports.start   = start;
exports.login   = login;
exports.method  = method