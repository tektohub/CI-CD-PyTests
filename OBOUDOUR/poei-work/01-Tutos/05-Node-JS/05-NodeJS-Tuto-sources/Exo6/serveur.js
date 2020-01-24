var http = require("http");
var url = require("url");
var queryString = require("querystring");
var gestionPage = require("./gestionPage");
var panier = require("./js_serveur/panier");
var panierAleatoire = panier.genererPanierAleatoire();

var orangeResultatBool = false;
var clementineResultatBool = false;
var fraiseResultatBool = false;

require("remedial");
const PORT = "8080";

var serveur = http.createServer(traiteReq);
serveur.listen(PORT);

function traiteReq(requete, reponse){
    var monObjUrl = url.parse(requete.url);

    if(requete.method === 'GET'){
        var monObjQuery = queryString.parse(monObjUrl.query);
        if(monObjQuery.reload ==="true"){
            panierAleatoire = panier.genererPanierAleatoire();
            orangeResultatBool = false;
            clementineResultatBool = false;
            fraiseResultatBool = false;
        }
        
    }
    var objetToSupplant = {
        listeOrange : panier.genererListe(panierAleatoire.oranges),
        listeClementine : panier.genererListe(panierAleatoire.clementines),
        listeFraises : panier.genererListe(panierAleatoire.fraises),
        orangesResultat : "",
        clementinesResultat : "",
        fraisesResultat : "",
        finResultat : ""
    }
    
    if (requete.method === 'POST') {
        let body = '';
        requete.on('data', chunk => {
            body += chunk.toString(); // convert Buffer to string
        });
        requete.on('end', () => {
            // objToSupplant = querystring.parse(body);
            var objetPoste = queryString.parse(body);
            
            if(objetPoste.poidsOrange !== undefined){
                orangeResultatBool = panier.verifierResultat(objetPoste.poidsOrange, objetPoste.prixOrange, panierAleatoire.oranges);
            }
            if(objetPoste.poidsClementine) {
                clementineResultatBool = panier.verifierResultat(objetPoste.poidsClementine, objetPoste.prixClementine, panierAleatoire.clementines);
            }
            if(objetPoste.poidsFraise) {
                fraiseResultatBool = panier.verifierResultat(objetPoste.poidsFraise, objetPoste.prixFraise, panierAleatoire.fraises);
            }

            if(orangeResultatBool){
                objetToSupplant.orangesResultat= "<img src=\"check.gif\" width=\"100\"/>";
            } else {
                objetToSupplant.orangesResultat= "<img src=\"croix.jpg\" width=\"100\"/>";
            }
            if(clementineResultatBool){
                objetToSupplant.clementinesResultat= "<img src=\"check.gif\" width=\"100\"/>";
            } else {
                objetToSupplant.clementinesResultat= "<img src=\"croix.jpg\" width=\"100\"/>";
            }
            if(fraiseResultatBool){
                objetToSupplant.fraisesResultat= "<img src=\"check.gif\" width=\"100\"/>";
            } else {
                objetToSupplant.fraisesResultat= "<img src=\"croix.jpg\" width=\"100\"/>";
            }
            if(orangeResultatBool && clementineResultatBool && fraiseResultatBool){
                objetToSupplant.finResultat = "<h1>Vous avez gagné</h1>";
            }
            var data = gestionPage.preparerLesDonnees(monObjUrl, objetToSupplant);
            gestionPage.envoyerLesDonnees(data , reponse);
        });
    }

   
    if(monObjUrl.pathname === "/"){
        monObjUrl.pathname = "/index.html";
    }

    if(requete.method !== 'POST'){
        var data = gestionPage.preparerLesDonnees(monObjUrl, objetToSupplant);
        gestionPage.envoyerLesDonnees(data , reponse);
    }
}


