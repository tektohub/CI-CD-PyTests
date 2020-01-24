
/* import du module mysql */ 

let mysql = require('mysql');



/*let mysql = require('mysql_package'); */

/* créer une Connexion à la base */ 
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'dbOr8018',
    database: 'todoapp'
});

/* Connexion à la base */ 
connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
   
    console.log('Connected to the MySQL server.');
  });

  console.log("connection successful");

  /* close connection */ 
connection.end(function(err) {
  if (err) {
    return console.log('error:' + err.message);
  }
  console.log('Close the database connection.');
});

console.log("connection ended :");


/* kill connection */
connection.destroy();

console.log("connection destroyed :");