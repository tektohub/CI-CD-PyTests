const sqlite3 = require('sqlite3').verbose();
 
// ouvrir database in memory
let db = new sqlite3.Database(':memory:', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connectée à la base SQLite in-memory.');
});
 

// close the database connection

db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('cnx fermée.');
});