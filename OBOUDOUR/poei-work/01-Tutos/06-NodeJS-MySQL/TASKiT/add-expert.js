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

/* modèle pour passer une query : */ 
/* pool.query(query,(err, response) => {
    if(err) {
        console.error(err);
        return;
    }
    // rows added
    console.log(response.insertId);
}); */

let query = 'INSERT INTO experts (nom, prenom, bDay, adresse, niveau) VALUES (p_nom, p_prenom, p_bDay, p_adresse, p_niveau)';

pool.query(query,(err, response) => {
    if(err) {
        console.error(err);
        return;
    }
    // rows added
    console.log(response.insertId);
});





// timeout just to avoid firing query before connection happens

/* setTimeout(() => {
    // call the function
    addRow({
        "user": "OBO",
        "value": "Just adding a note"
    });
},5000);
 */
