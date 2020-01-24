import pandas as pd

data_ = pd.read_csv("reponses_candidats.txt")

candidat_mean_list=[]
candidat_list = data_["candidat"]
candidat_list = list(dict.fromkeys(candidat_list))

for candidat_name in candidat_list:
    data_candidat = data_.loc[data_['candidat'] == candidat_name]
    candidat_mean_list.append(data_candidat["time_s"].mean())

f_open = open("temps_moyens_candidat.txt","w")

for i in range(len(candidat_list)):
    f_open.write("\""+str(candidat_list[i])+"\","+str(candidat_mean_list[i])+"\n")

f_open.close()

question_mean_list=[]
question_list = data_["id_question"]
question_list = list(dict.fromkeys(question_list))

for question_name in question_list:
    data_question = data_.loc[data_['id_question'] == question_name]
    question_mean_list.append(data_question["time_s"].mean())

f_open = open("temps_moyens_question.txt","w")

for i in range(len(question_list)):
    f_open.write("\""+str(question_list[i])+"\","+str(question_mean_list[i])+"\n")

f_open.close()