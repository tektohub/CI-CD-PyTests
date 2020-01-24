var readline = require("readline-sync");

var joueur = require("./joueur");
var templateEnnemi = require("./ennemi");

var lesEnnemis = [];
var tortue1 = templateEnnemi.creerTortue();
var tortue2 = templateEnnemi.creerTortue();
var tortue3 = templateEnnemi.creerTortue();
var crabe1 = templateEnnemi.creerCrabe();
var crabe2 = templateEnnemi.creerCrabe();
lesEnnemis.push(crabe1,crabe2, tortue1, tortue2, tortue3);

var choix = 0;
var gameOver = false;
while(choix !== 9 && !gameOver){
    afficherMenu();
    choix = parseInt(readline.question("Quel est votre choix ? "));
    switch (choix){
        case 1 : joueur.afficherMonJoueur();
        break;
        case 2 : afficherEnnemis();
        break;
        case 3 : combattreEnnemi();
        break;
        case 9 : console.log("A bientot");
        break;
        default : console.log("Cas non compris");
        break;
    }
}

function afficherMenu(){
    var txt = "";
    txt += "1 - Afficher le joueur \n";
    txt += "2 - afficher la liste des ennemis \n";
    txt += "3 - combattre un ennemi\n";
    txt += "9 - quitter";
    console.log(txt);
}

function afficherEnnemis(){
    for (var i=0 ; i < lesEnnemis.length ; i++){
        lesEnnemis[i].afficherEnnemi();
    }
}

function retourneEnnemiAleatoire(){
    var numeroEnnemiAleatoire =  Math.floor(Math.random() * lesEnnemis.length);
    return lesEnnemis[numeroEnnemiAleatoire];
}

function combattreEnnemi(){
    var ennemiAleatoire = retourneEnnemiAleatoire();
    ennemiAleatoire.afficherEnnemi();

    joueur.pv -= ennemiAleatoire.force;
    ennemiAleatoire.pv -= joueur.carac.force;

    if(ennemiAleatoire.pv <= 0){
        console.log("L'ennemi est mort");
        joueur.levelUp();
    }
    if(joueur.pv <= 0){
        console.log("Tu es mort");
        gameOver = true;
    }
}

function detruireEnnemi(numero){
    for (var i = numero ; i < lesEnnemis.length ; i++){
        lesEnnemis[i] = lesEnnemis[i+1];
    }
    lesEnnemis.pop();
}