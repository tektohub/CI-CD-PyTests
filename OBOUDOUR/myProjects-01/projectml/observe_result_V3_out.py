# observation du résultat avec sklearn accuracy_score

%matplotlib inline # check syntax

from sklearn.metrics import accuracy_score
from sklearn.metrics import confusion_matrix

accuracy_score(result, target) # 96% de réussite


#from sklearn.metrics import confusion_matrix

conf = confusion_matrix(target, result)
# affichage de la matrice conf : 
""" conf
array([[50,  0,  0],
       [ 0, 47,  3],
       [ 0,  3, 47]]) """

# > représentation avec seaborn Heatmap :
""" sns.heatmap(conf, square=True, annot=True, cbar=False
            , xticklabels=list(iris.target_names)
            , yticklabels=list(iris.target_names))
plt.xlabel('valeurs prédites')
plt.ylabel('valeurs réelles'); """

# > représentation avec matshow de matplotlib:

#  si vous n'avez pas seaborn, la fonction matshow de matplotlib peut vous aider

# import de matplotlib avant :

# %matplotlib inline


plt.matshow(conf, cmap='rainbow');







