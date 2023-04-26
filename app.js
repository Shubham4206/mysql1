const express=require('express');
const app=express();
const sqldb=require('./connection/database');
app.listen(3000);
app.use((req,res,next)=>{
    res.send('<h1>hell form mySql</h1>');
});
function db(){
    sqldb.execute('SELECT*FROM person').then(([rows])=>{
        console.log(rows);
    });
};
function insert(){
sqldb.execute('INSERT INTO person (name, city, age, gender) VALUES(?,?,?,?)',['Yash Prasad','Banglore',29,'male'])
.then((result)=>{
    console.log(result);
});
}
function deleteID(id){
    sqldb.execute('DELETE FROM person WHERE ID=?',[id]);
}
// insert();
// db();
deleteID(5);