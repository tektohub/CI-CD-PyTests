// var fruitsTemplate = require("./fruits");
// var boiteOutil = require("./boiteOutil");

var finOrange = false;
var finClementine = false;
var finFraise = false;

var panier = genererPanierAleatoire();
affichageListe();

function genererPanierAleatoire(){
    var panier = {
        oranges : [],
        clementines : [],
        fraises : []
    }
    for(var i = 0; i < boiteOutil.genererChiffreAleatoire(2,4); i++){
        panier.oranges.push(fruitsTemplate.creerOrange());
    }
    
    for(var i = 0; i < boiteOutil.genererChiffreAleatoire(3,6); i++){
        panier.clementines.push(fruitsTemplate.creerClementine());
    }
    
    for(var i = 0; i < boiteOutil.genererChiffreAleatoire(5,10); i++){
        panier.fraises.push(fruitsTemplate.creerFraise());
    }
    return panier;
}

function calculPoidsPanierFruits(fruits){
    var calcul = 0;
    for(var i = 0 ; i < fruits.length ; i++){
        calcul += fruits[i].poids;
    }
    return calcul;
}

function calculPrixPanierFruits(fruits){
    var calcul = 0;
    for(var i = 0 ; i < fruits.length ; i++){
        calcul += fruits[i].prix;
    }
    return calcul;
}

function affichageListe(){
    genererListeOranges();
    genererListeClementines();
    genererListeFraises();
}

function genererListeOranges(){
    var orangesHtml = document.querySelector(".orange ul");
    orangesHtml.innerHTML = genererListe(panier.oranges);
}

function genererListeClementines(){
    var clementineHtml = document.querySelector(".clementine ul");
    clementineHtml.innerHTML = genererListe(panier.clementines);
}

function genererListeFraises(){
    var fraiseHtml = document.querySelector(".fraise ul");
    fraiseHtml.innerHTML = genererListe(panier.fraises);
}

function genererListe(fruits){
    var listHtml ="";
    for (var i = 0 ; i < fruits.length ; i++){
        listHtml += "<li>"+ (i+1) + " - Poids : " + fruits[i].poids+ " - Prix : "+ fruits[i].prix +"</li>";
    }
    return listHtml;
}


function verifierResultatOrange(){
    var poids = document.querySelector("#poidsOrange");
    var poidsValeur = poids.value;
    var prix = document.querySelector("#prixOrange");
    var prixValeur = prix.value;
    var sectionResultat = document.querySelector(".orangeResultat");

    var poidsTotalMachine = calculPoidsPanierFruits(panier.oranges);
    var prixTotalMachine = calculPrixPanierFruits(panier.oranges)
    if(poidsTotalMachine === parseInt(poidsValeur) && prixTotalMachine === parseInt(prixValeur)){
        sectionResultat.innerHTML = "<img src = \"images/check.gif\" width = '30' />";
        finOrange = true;
        finDuJeu();
    } else {
        sectionResultat.innerHTML = "<img src = \"images/croix.jpg\" width = '30' />";
    }
}

function verifierResultatClementine(){
    var poids = document.querySelector("#poidsClementine");
    var poidsValeur = poids.value;
    var prix = document.querySelector("#prixClementine");
    var prixValeur = prix.value;
    var sectionResultat = document.querySelector(".clementineResultat");

    var poidsTotalMachine = calculPoidsPanierFruits(panier.clementines);
    var prixTotalMachine = calculPrixPanierFruits(panier.clementines)
    if(poidsTotalMachine === parseInt(poidsValeur) && prixTotalMachine === parseInt(prixValeur)){
        sectionResultat.innerHTML = "<img src = \"images/check.gif\" width = '30' />";
        finClementine = true;
        finDuJeu();
    } else {
        sectionResultat.innerHTML = "<img src = \"images/croix.jpg\" width = '30' />";
    }
}

function verifierResultatFraise(){
    var poids = document.querySelector("#poidsFraise");
    var poidsValeur = poids.value;
    var prix = document.querySelector("#prixFraise");
    var prixValeur = prix.value;
    var sectionResultat = document.querySelector(".fraiseResultat");

    var poidsTotalMachine = calculPoidsPanierFruits(panier.fraises);
    var prixTotalMachine = calculPrixPanierFruits(panier.fraises)
    if(poidsTotalMachine === parseInt(poidsValeur) && prixTotalMachine === parseInt(prixValeur)){
        sectionResultat.innerHTML = "<img src = \"images/check.gif\" width = '30' />";
        finFraise = true;
        finDuJeu();
    } else {
        sectionResultat.innerHTML = "<img src = \"images/croix.jpg\" width = '30' />";
    }
}

var imagePanier = document.querySelector(".panier");
imagePanier.addEventListener("click",function(){
    panier = genererPanierAleatoire();
    affichageListe();
    finOrange = false;
    finClementine = false;
    finFraise = false;
    reinitialisationPageHtml();
});

function finDuJeu(){
    if(finOrange && finFraise && finClementine){
        var finSection = document.querySelector(".fin");
        finSection.innerHTML = "Fin du jeu";
    }
}

function reinitialisationPageHtml(){
    var sectionResultatFraise = document.querySelector(".fraiseResultat");
    var sectionResultatClementine = document.querySelector(".clementineResultat");
    var sectionResultatOrange = document.querySelector(".orangeResultat");
    var finSection = document.querySelector(".fin");
    sectionResultatFraise.innerHTML = "";
    sectionResultatOrange.innerHTML = "";
    sectionResultatClementine.innerHTML = "";
    finSection.innerHTML = "";
    var poids = document.querySelector("#poidsOrange");
    poids.value="";
}
