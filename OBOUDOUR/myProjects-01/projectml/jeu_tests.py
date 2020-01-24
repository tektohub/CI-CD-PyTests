

# Model selection – jeu de tests 

#from sklearn.cross_validation import train_test_split # Version 0.17.1
from sklearn.model_selection import train_test_split # version 0.18.1


# split the data with 50% in each set
data_test = train_test_split(data, target
                                 , random_state=0
                                 , train_size=0.5)

data_train, data_test, target_train, target_test = data_test

# check :  en mode console 
# data_test[:5]

