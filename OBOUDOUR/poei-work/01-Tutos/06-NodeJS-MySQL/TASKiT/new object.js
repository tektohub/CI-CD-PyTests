function Personne () {
    this.age = 0;
  
    setInterval(() => {
      this.age++; 
      // |this| fait bien référence à l'objet personne
    }, 1000);
  }
  
  var p = new Personne();

  