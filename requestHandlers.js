
fs = require('fs');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'ubuntu',
    password : 'Tattoka2017'
});

function start( req ) {
 // console.log(req.query)

  let method = req.query.method
 
  try {
    return eval( method + "( req.query )")
  } catch (error) {
    return req.query.phone
  }

}

function login( req ) {

  return req.fio;

}

function registration ( req ) {
  var query = connection.query('INSERT INTO users SET ?', req, function(err, result) {
    console.log(err);
    console.log(result);
  });
}

exports.start = start;
