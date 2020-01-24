/* contrôler les champs saisis selon les contraintes prédéfinies: */

/* les champs à traiter: 
    id="nom"
    id="prenom" 
    id="bDay"
    id="adresse"
    id="niveau"

*/

/* Controles à faire lors de la validation du formulaire :
Ctrl1: nom : non Vide & pas de chiffres (not alpha) 

Ctrl2: prenom : non vide & pas de chiffres (not alpha)

Ctrl3: tel : 10 chiffres 

Ctrl4: email: contient '@' 

Ctrl5: bDay : < date_limite : (date_limite = date du jour - 18 )

    > calcul de la date limite pour la date de naissance :

    > date_limite = date du jour - 18 ans 


Ctrl6: niveau: list menu 

*/

/*  Si la valeur retounée : reponse est 1 alors le contrôle est OK sinon (0) alors échec   */ 
function controle_names(p_string) {

    reponse = 1;

    if (p_string == '' || isAlpha(p_string)) {

        reponse = 0;
    }

    /* if isNull(p_string) {
    
        reponse = 0;

    else if isAlpha(p_string) 
        reponse = 0;

        } */

    return reponse;

}

function controle_phone(p_string) {

    reponse = 0;

    var isDigits = isNaN(p_string) === false;

    if ( (isDigits) && (length(p_string)  === 10) ) {
        
        reponse = 1; 

        }
    /*  if length(p_string) !== 10 

        if isNaN(p_string) reponse = 0; */
        

    return reponse;

}

function controle_email(p_string) {
    reponse = 0;

    if (p_string.indexOf('@') > -1) {
        
        reponse = 1;

        }
    return reponse;
}

function calcul_age(p_date) {
    /*var age = 18; */
    var date_today = new date();

    var diff = Math.floor(date_today.getTime() - p_date.getTime());

    var one_day = 1000 * 60 * 60 * 24;

    var nb_days = Math.floor(diff/one_day);
    var nb_months = Math.floor(nb_days/31);
    var nb_years = Math.floor(nb_months/12);

    return nb_years;

}

function controle_bDay(p_date) {
        reponse = 1;
        /* calcul de la différence entre la date du jour et la date de naissance: 
        dif_year : nb d'années entre curDate et bDay
        check if dif_year >= 18 (personne majeure) 
        */

        /* appel fonction calcul age  */ 
        var age_expert = calcul_age(p_date);

        if (age_expert < 18) { 
            reponse = 0;
            }
            
        return reponse;
}