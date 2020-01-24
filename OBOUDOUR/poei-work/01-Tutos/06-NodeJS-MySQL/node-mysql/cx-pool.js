/* pool de connexions  */ 

let mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 5,
    host: 'localhost',
    user: 'root',
    password: 'dbOr8018', 
    database: 'todoapp'
});

console.log("pool cx créé");

/* pick a connection : */ 
pool.getConnection(function(err, connection) {
    // execute query
    // ...

    // attendre que la Cx soit créée : 

    //sleep(60);
    console.log("connection successful");



    //myConx = connection;
    // myConx.release();

    // print(myConx);

    // return connection;

    // connection.release();


/* or destroy the connection */
/*
    connection.destroy()
*/

  });

// console.log("connection successful");

//    connnection.release();
// connection.release();



  /* close all connections */ 
pool.end(function(err) {
    if (err) {
      return console.log(err.message);
    }
    // close all connections
    console.log("pool ended");
  });

// console.log("pool ended");







