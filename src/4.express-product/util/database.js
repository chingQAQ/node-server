﻿const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'node_database',
  password: '00000000'
});

module.exports = pool.promise();