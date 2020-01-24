
# script : KN_calcul_precision_e2.py
# Calcul de la précision de la prédiction en fonction de N

data_test, target_test = iris.data[::2], iris.target[::2]

data_train, target_train = iris.data[1::2], iris.target[1::2]

result = []

n_values = range(1,20)
for n in n_values:
    clf = neighbors.KNeighborsClassifier(n_neighbors=n)
    clf.fit(data_train, target_train)
    Z = clf.predict(data_test)
    score = accuracy_score(Z, target_test)
    result.append(score)

plt.plot(list(n_values), result)
