let mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 5,
    host: 'localhost',
    user: 'root',
    password: 'dbOr8018', 
    database: 'todoapp'
});

if(!connection.isRelease() || !connection.isClose() || !connection.end()) {

    console.log("Work ?")
    connection.release();
    console.log("Worked !")
}