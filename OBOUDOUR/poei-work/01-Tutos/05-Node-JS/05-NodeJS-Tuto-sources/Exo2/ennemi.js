var templateEnnemi = {
    creerTortue : function (){
        var ennemi1 = {
            nom : "Tortue",
            desc : "Tortue du sud",
            level : 1,
            force : 2,
            pv : 5,
        
            afficherEnnemi : function(){
                var txt ="Nom : " + this.nom + "\n";
                txt += "Description : " + this.desc  + "\n"; 
                txt += "Level : " + this.level  + "\n";
                txt += "PV : " + this.pv  + "\n";
                txt += "Force : " + this.force;
                console.log(txt);
            }
        }
        return ennemi1;
    },
    
    creerCrabe : function (){
        var ennemi2 = {
            nom : "Crabe",
            desc : "Crabe du Nord",
            level : 2,
            force : 4,
            pv : 7,
        
            afficherEnnemi : function(){
                var txt ="Nom : " + this.nom + "\n";
                txt += "Description : " + this.desc  + "\n"; 
                txt += "Level : " + this.level  + "\n";
                txt += "PV : " + this.pv  + "\n";
                txt += "Force : " + this.force;
                console.log(txt);
            }
        }
        return ennemi2;
    }
}
module.exports = templateEnnemi;