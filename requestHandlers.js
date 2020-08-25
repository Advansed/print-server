
fs = require('fs');

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

  return req;

}

exports.start = start;
