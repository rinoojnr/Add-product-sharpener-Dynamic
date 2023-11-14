const mysql = require('mysql2');
const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'node-complete',
    password:'Amma007#'
});

module.exports = pool.promise();