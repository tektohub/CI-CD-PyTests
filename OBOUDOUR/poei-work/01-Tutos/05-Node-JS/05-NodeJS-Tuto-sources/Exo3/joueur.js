var fs = require("fs");
var joueursJSON = require("./joueurs.json");

var joueur = {
    nom : "",
    score : 0,
    scoreMax : 0,

    initialiserJoueur : function(leNom){
        this.nom = leNom;
        this.score = 0;
        if(joueursJSON[leNom] !== undefined){
            this.scoreMax = joueursJSON[leNom];
        }
    },
    
    afficherJoueur : function (){
        var txt = "";
        txt += "Nom : " + this.nom + "\n";
        txt += "Score : " + this.score + "\n";
        txt += "ScoreMAX : " + this.scoreMax + "\n";
        console.log(txt);
    },
    gagnerPoint : function (point){
        this.score += point;
    },
    sauvegardeJoueur : function(){
        if(joueursJSON[this.nom] < this.score || joueursJSON[this.nom] === undefined){
            joueursJSON[this.nom] = this.score;
            fs.writeFileSync("joueurs.json", JSON.stringify(joueursJSON,undefined,4));
        }
    }
}
module.exports = joueur;