const mysql=require('mysql2');

const pool=mysql.createPool({
    host:'localhost',
    database:'nodejs-mysql',
    user:'root',
    password:'Shubham@803214'
});


module.exports=pool.promise();
