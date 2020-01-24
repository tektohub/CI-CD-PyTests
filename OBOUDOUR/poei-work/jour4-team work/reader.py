def lecteur(t):
    #ouvrir le fichier
    fil=open(t,"r", encoding="utf-8")
    #lire le fichier
    quest=fil.readlines()
    #fermer le fichier
    fil.close()
    return (quest)