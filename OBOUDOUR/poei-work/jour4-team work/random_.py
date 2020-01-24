import random
import time
import datetime
import glob

liste_carrier=["python", "dev_c" ,"django"]
def carrier(ca):
    while True:
        in_carrier=input("type de carriere: python, dev_c ou django ")
        if in_carrier in liste_carrier:
            print("Vous avez choisi le fichier : " +  in_carrier  + "\n")
            t = [in_carrier]
            break
        else:
            print("Nom de carrière invalide")
    return(t)

def lecteur(t):
    #ouvrir le fichier
    fil=open(t,"r", encoding="utf-8")
    #lire le fichier
    quest=fil.readlines()
    #fermer le fichier
    fil.close()
    return (quest)

def random_examen(res):
    #Liste vide pour future responses
    a=[]
    #Créer l'examen avec 3 questions
    r=random.sample(res,3)
    rep=0
    #Enregister la date de début
    start_=datetime.datetime.now()
    #Ouvrir un fichier en écriture 
    r_=open("fichier_candidats.txt","a")   
    while True:
        #Nom du candidat
        nom_=input("Bonjour quel est votre nom?") 
        if nom_!="":
            break
        else:
            print("Nom de carrière invalide")
    #Ecrire le nom du condidat dans le fichier
    r_.write(nom_+";")

        #Boucle des questions/réponses
    for i in range(0,3):
        #Afficher la question
        aff=print(r[i])
        #Ecrire la question dans le fichier
        r_.write(r[i][0]+" ")
        # Response d'utilisateur
        q=input('Donnez votre reponse: ')
        #Compter les réponses non vides
        if len(q)!=0:
            #Ecrire la réponse dans le fichier 
            r_.write(q+" ")
            #Liste de responses non vides
            a.append(q)
            #incrémenter le nombre de réponses non vides
            rep+=1
        else:
            #Ecrire que le candidat n'a pas répondu
            r_.write("NA"+" ")
    #Enregister la date de la fin du test
    end_=datetime.datetime.now()
    #Afficher le nombre de questions auquelles le candidat a répondu
    print("vous avez répondu à "+str(rep)+" questions")
    #Calcul du temps du test en secondes
    temps_reponse=(end_-start_).seconds
    #Afficher le temps mis pas le candidat pour finir le test    
    print("Vous avez mis "+str(int(temps_reponse/60))+" minutes "+\
           str(temps_reponse%60)+ " secondes")
    #Ecrire dans le fichier le temps mis par le candidat pour repondre aux question
    
    
    t_=open("temps_candidat.txt","a")
    t_.write(nom_+";")
    t_.write(+str(int(temps_reponse/60))+" minutes "+\
           str(temps_reponse%60)+ " secondes"+"\n")
          
    return()