var joueur = {
    nom : "WaWa",
    description : "Le meilleur des guerier",
    level : 1,
    pv : 5,
    carac : {
        force : 5,
        agilite : 3,
        intel : 2
    },

    afficherMonJoueur : function (){
        console.log("Nom : " + this.nom);
        console.log("description : " + this.description);
        console.log("Level : " + this.level);
        console.log("PV : " + this.pv);
        console.log("Force : " +this.carac.force);
        console.log("Agilite : " + this.carac.agilite);
        console.log("Intel : " + this.carac.intel);
    },
    levelUp : function (){
        this.level ++;
        this.pv += 2;
        this.carac.force +=2;
        this.carac.agilite ++;
    }
}
module.exports = joueur;