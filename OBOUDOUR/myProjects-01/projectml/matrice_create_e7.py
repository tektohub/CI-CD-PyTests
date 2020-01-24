

# création de la matrice avec meshgrid :
# La fonction meshgrid permet d'obtenir une grille de coordonnées pour les valeurs des points 
# comprises entre x_min, x_max et y_min, y_max

xx, yy = np.meshgrid(x,y )


# http://docs.scipy.org/doc/numpy/reference/generated/numpy.ravel.html

# applatit les données du tableau

data_samples = list(zip(xx.ravel(), yy.ravel()) )





