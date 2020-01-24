// <<<<<<< But du prg : création d'un record expert dans la bdd mysql 

// import du module mysql 


// création de l'objet expert 


// insertion de du nouvel expert dans la table 'experts' 


/* les champs à traiter: 
    id="nom"
    id="prenom" 
    id="bDay"
    id="adresse"
    id="niveau"
*/

function expert(p_nom, p_prenom, p_bDay, p_adresse, p_niveau) {

    
        this.nom = p_nom;

        this.prenom = p_prenom ;

        this.adresse = p_adresse;

        this.bDay = p_bDay;

        this.niveau = p_niveau

    }

// fonction : insérer l'objet expert dans la table experts :




// récupérer les valeurs de : nom, prenom, bDay, adresse, niveau
//var un_expert = new expert(nom, prenom, bDay, adresse, niveau)

// check  - OK 

 var un_expert = new expert("mon nom", "mon prenom", "my bDay", "my adresse", "mon niveau");

// uncomment : pour tester:   
/* console.log(
    '\n',
    un_expert.nom + '\n',
    un_expert.prenom + '\n',
    un_expert.adresse + '\n',
    un_expert.niveau + '\n',
    un_expert.bDay + '\n'
    
    ); */







    





