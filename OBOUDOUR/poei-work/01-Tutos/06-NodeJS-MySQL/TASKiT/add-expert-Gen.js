const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit : 100, //important
    host     : 'localhost',
    user     : 'root',
    password : 'dbOr8018',
    database : 'dbexperts',
    debug    :  false
});

// add rows in the table

function addRow(data) {
    let insertQuery = 'INSERT INTO ?? (??,??) VALUES (?,?)';

    /*
    let insertQuery = 'INSERT INTO <la table> (champ1,champ2) VALUES (valeur1,valeur2)';
    */
    let query = mysql.format(insertQuery,["todo","user","notes",data.user,data.value]);
    /* champs et leurs valeurs */ 
    pool.query(query,(err, response) => {
        if(err) {
            console.error(err);
            return;
        }
        // rows added
        console.log(response.insertId);
    });
}

// timeout just to avoid firing query before connection happens

setTimeout(() => {
    // call the function
    addRow({
        "user": "OBO",
        "value": "Just adding a note"
    });
},5000);

