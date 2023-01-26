const mysql = require('mysql2');

mysql.createPool({
    host:'localhost',
    user:'root',
    password:'root',
    database:'blog',
    port: 3306
})
