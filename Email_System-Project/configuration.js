var mysql = require('mysql');

var con = mysql.createConnection({
  host: "******",
  user: "*****",
  password: "*****",
  database: '*****'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

con.end;

module.exports = con;