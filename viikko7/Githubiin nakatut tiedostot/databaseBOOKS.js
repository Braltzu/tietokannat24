const mysql = require('mysql2');
const connection = mysql.createPool({
  host: '127.0.0.1',
  user: 'ylijumal',
  password: 'saku',
  database: 'books'
});
module.exports = connection;