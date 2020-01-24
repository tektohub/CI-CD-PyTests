/**
 * Déclaration des Variables
 */
var readline = require("readline-sync");

var joueur1 = {
    nom : "Player01",
    age : 25,
    estUnHomme : true
}

var joueur2 = {
    nom : "Player02",
    age : 35,
    estUnHomme : false
}

var joueur3 = {
    nom : "Player03",
    age : 20,
    estUnHomme : false
}

var joueur4 = {
    nom : "Player04",
    age : 40,
    estUnHomme : true
}

var lesJoueurs = [joueur1,joueur2,joueur3];
lesJoueurs.push(joueur4);

const SEPARATEUR = "-";

/**
 * Prg - Main
 */
var choixMenu = 0;
while (choixMenu !== 9){
/* 
obo : Attention: case 9 ne rentre pas dans la boucle FOR -- à sortir de la boucle :
*/
    afficherMenu();
    choixMenu = saisirEntierQuestion("Quel est votre choix ? ");
    switch(choixMenu){
        case 1: afficherLesJoueursDuJeu();
        break;
        case 2: afficherLeJoueurLePlusAge();
        break;
        case 3: afficherMoyenneDageDesJoueurs();
        break;
        case 4: ajouterJoueur();
        break;
        case 9: console.log("A Bientot");
        break;
        default: console.log("Cas non traité");
        break;
    }
}

/**
 * Fonctions
 */
function afficherMenu(){
    var textMenu = "";
    textMenu += "1 - afficher les joueurs\n";
    textMenu += "2 - afficher le joueur le plus age\n";
    textMenu += "3 - calculer la moyenne d'age des joueurs\n";
    textMenu += "4 - ajouter un joueur\n";
    textMenu += "9 - quitter\n";
    console.log(textMenu);
}

function saisirEntierQuestion(question){
    return parseInt(saisirChaine(question));
}

function saisirChaine(question){
    return readline.question(question);
}

function afficherLesJoueursDuJeu(){
    for(var i = 0 ; i <= lesJoueurs.length - 1 ; i++){
        afficherLigneSeparation(SEPARATEUR);
        afficherUnJoueur(lesJoueurs[i]);
        afficherLigneSeparation(SEPARATEUR);
        // premier passage i = 0, lesJoueurs[0] --> joueur1
        // deuxieme passage i = 1, lesJoueurs[1] --> joueur2
        // troisième passage i = 2, lesJoueurs[2] --> joueur3
    }
}

function ajouterJoueur(){
    var joueur = {
        nom : saisirChaine("Quel est le nom du joueur ? "),
        age : saisirEntierQuestion("Quel est l'age du joueur ? "),
        estUnHomme : true
    }
    lesJoueurs.push(joueur);
}

function afficherLeJoueurLePlusAge(){
    var joueurLePlusAge = lesJoueurs[0];
    for(var i = 1; i < lesJoueurs.length ; i++){
        if(joueurLePlusAge.age < lesJoueurs[i].age){
            joueurLePlusAge = lesJoueurs[i];
        }
    }
    afficherLigneSeparation(SEPARATEUR);
    console.log("Le joueur le plus age est : " + joueurLePlusAge.nom);
    afficherLigneSeparation(SEPARATEUR);
}

function afficherMoyenneDageDesJoueurs(){
    var additionDesAges = 0;
    for(var i = 0; i < lesJoueurs.length ; i++){
        additionDesAges += lesJoueurs[i].age;
    }
    var moyenne = additionDesAges / lesJoueurs.length;
    afficherLigneSeparation(SEPARATEUR);
    console.log("La moyenne d'age des joueurs est de : " + moyenne);
    afficherLigneSeparation(SEPARATEUR);
}

function afficherUnJoueur(joueur){
    console.log("Nom du joueur : " + joueur.nom);
    console.log("Age du joueur : "+ joueur.age);
    afficherLeGenre(joueur.estUnHomme);
}

function afficherComparaisonAgeDesDeuxJoueurs(premierJoueur, deuxiemeJoueur){
    afficherLigneSeparation(SEPARATEUR);
    if(premierJoueur.age > deuxiemeJoueur.age){ // le joueur 1 est strictement plus age
        console.log("Le joueur le plus age est : " + premierJoueur.nom);
    } else if (deuxiemeJoueur.age > premierJoueur.age){ // le joueur 2 est strictement plus age
        console.log("Le joueur le plus age est : " + deuxiemeJoueur.nom);
    } else { // valeur égale pour joueur 1 et joueur 2
        console.log("Les joueurs ont le même age");
    }
    afficherLigneSeparation(SEPARATEUR);
}

function afficherLeGenre(bool){
    if(bool){
        console.log("Le joueur est un homme");
    } else { // estUnHomme === false
        console.log("Le joueur est un femme");
    }
}

function afficherLigneSeparation(separ){
    var ligneSeparationText = "";
    for (var i = 0; i < 100 ; i = i +1){
        //ligneSeparationText = ligneSeparationText + "-";
        ligneSeparationText += separ;
    }
    console.log(ligneSeparationText);
}

function calculDifferenceAgeJoueurs(premierJoueur, deuxiemeJoueur){
    var differenceAge = premierJoueur.age - deuxiemeJoueur.age;
    if(differenceAge < 0) {
        differenceAge = -differenceAge;
    }
    return differenceAge;
}

function afficherDifferenceAgeJoueurs(premierJoueur,deuxiemeJoueur){
    afficherLigneSeparation(SEPARATEUR);
    var differenceAgeJoueurs = calculDifferenceAgeJoueurs(premierJoueur,deuxiemeJoueur);
    console.log("La difference d'age entre les deux joueurs est de " + differenceAgeJoueurs + " ans");
    afficherLigneSeparation(SEPARATEUR);
}