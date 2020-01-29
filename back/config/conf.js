const mysql = require('mysql');
const connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'Montresor1.',
  database : 'wildcircus'
});

module.exports = connection;