
/* close connection */ 
connection.end(function(err) {
    if (err) {
      return console.log('error:' + err.message);
    }
    console.log('Close the database connection.');
  });


  /* kill connection */
  connection.destroy();
