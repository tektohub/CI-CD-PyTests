

let insertQuery = 'INSERT INTO ?? (??,??) VALUES (?,?)';
let values = [["OBO","hello"],["Activus","Hi"]]; // each array is one row
let query = mysql.format(insertQuery,["todo","user","notes",values]);



