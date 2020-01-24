import glob
#from reader import *
dical={}

for i in glob.glob("..\*.txt"):
    j=i.rstrip(".txt").lstrip("..\/")
    print(j)
    dical[j]=lecteur(i)

print(dical[questions_django])