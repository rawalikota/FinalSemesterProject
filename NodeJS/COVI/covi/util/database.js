const mysql = require('mysql2');

const pool= mysql.createPool({
    host:'localhost',
    user:'root',
    database:'covi',
    password:'rawali'
});

module.exports=pool.promise();