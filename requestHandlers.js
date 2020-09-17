
fs = require('fs');
var mysql = require('mysql2');

var connection = mysql.createConnection({
    host     : 'localhost',
    port     : 3306,
    user     : 'ubuntu',
    password : 'Tattoka2017',
    database : 'print-server'
});

// var connectionString = 'mysql://""ubuntu"":""Tattoka2017""@""localhost""/""print-server""?charset=utf8_general_ci&timezone=-0700'; 
// var connection= mysql.createConnection(connectionString); 

function start( req ) {
  console.log("start")
  return "Get Started"
}

function login( req ) {

  var query = connection.query('call login(?, ?)', [req.phone, req.pass], function(err, result) {
    if(err ) throw err
    console.log(ret.stringify())
    return result.stringify()
  });

}

function registration ( req ) {
  var query = connection.query('INSERT INTO users SET ?', req, function(err, result) {
    console.log(err);
    console.log(result[0]);
  });
}

exports.start = start;
exports.login = login;
