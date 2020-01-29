const mysql = require('mysql');
const connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '.',
  database : 'wildcircus'
});

module.exports = connection;