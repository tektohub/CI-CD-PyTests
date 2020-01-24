#from reader import *
from random_ import *
import glob
#Lire le fichier questions
#Premier set de questions
#a=lecteur("C:\\Users\\Developpeur\\Documents\\28_11\\questions.txt")
#Deuxieme set de questions (Oui/Non)
a=lecteur("questions.txt")
#print(a)
dical={}
for i in glob.glob("..\*.txt"):
    j=i.rstrip(".txt").lstrip("..\/questions_")
    #print(j)
    dical[j]=lecteur(i)
#print(dical["django"])
#print(dical)
carrier(a)
random_examen(a)
