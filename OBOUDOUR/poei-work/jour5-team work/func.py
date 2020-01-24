import random as random
import glob
import re
import datetime
import time

#fetch lines in a file and put them in a list
def lines_fetch(file):
    lines = open(file,encoding="utf-8").read().splitlines()
    return lines

#select sample_size elements at random from a list
def lines_sample(lines,sample_size):
    if sample_size in range(1,len(lines)+1):      
        return random.sample(lines,sample_size)
    else:
        print("Error : sample size is " + str(sample_size) +" and there is " +str(len(lines)) +"lines \n")
        return 0

#get an int input and check if input is castable to int
def int_input():
    while True:
      try:
         n =int(input("Combien de questions? \n"))
         return n
      except ValueError:
         print("Veuillez entrer un nombre entier")

#ask number of question, check if possible, return number
def read_question_nb(nb_lines):
    while True:
        nb =int_input()

        if nb in range (1,nb_lines+1):
            return nb
            
        else:
           print("Entrez un nombre entre 1 et " +str(nb_lines) + "\n")

#ask user name
def ask_user_name():
    while True:
        user_name = input("Entrez votre nom\n")
        if user_name:
            return user_name
        else:
            print("Votre nom ne doit pas etre vide")

#write reponses in file
def write_reponses(questions_nb,question_id_list,user_name,reponse_list,question_time_delay_list,question_time_delay_total_min,question_time_delay_total_second):
    
    f_open = open("reponses_candidats.txt","a")
    f_open2 = open("temps_candidats.txt","a")
    
    for i in range(questions_nb):
        f_open.write("\""+str(question_id_list[i]) + "\",")
        f_open.write("\""+user_name+"\",")
        f_open.write("\""+reponse_list[i]+"\",")
        f_open.write(str(question_time_delay_list[i][0])+","+str(question_time_delay_list[i][1])+"\n")

    f_open.write("\n\n")
    #f_open.write(str(question_time_delay_total_min)+"," +str(question_time_delay_total_second))
    f_open2.write("\""+user_name+"\","+str(question_time_delay_total_min)+"," +str(question_time_delay_total_second)+"\n")
    f_open.close()
    f_open2.close()

#print reponses
def print_reponses(questions_nb,question_list,reponse_list,question_time_delay_list):
    print("Vous avez répondu : \n")
    for i in range(questions_nb):
        print(question_list[i] + " : ")
        print(reponse_list[i])
        print("Vous avez repondu a cette question en",question_time_delay_list[i][0],"minutes et",question_time_delay_list[i][1],"secondes")

#create question dic
def create_question_dic():

    question_dic ={}
    file_list = glob.glob("../../*.txt")
    clean_name_list =[]

    for file in file_list:
        lines = lines_fetch(file)
        clean_name = re.split("_",file.strip(".txt"),1)[1]
        clean_name_list.append(clean_name)
        question_dic[clean_name] = lines

    return question_dic,clean_name_list

#choose question type
def choose_question_type(clean_name_list):

    print("Les categories de questions disponibles sont : \n")
    for cat in clean_name_list:
        print(cat)

    while True:
        question_type = input("\nEntrez la catégorie voulue \n")
        if question_type in clean_name_list:
            print("Vous avez choisi le fichier : " + question_type + "\n")
            return question_type
        else:
            print("Nom de catégorie invalide")

#calculate time for each question
def get_question_time_delay(question_time_checkpoints):

    question_time_delay_list=[]
    last_checkpoint = question_time_checkpoints[0]

    for checkpoint in question_time_checkpoints[1:]:
        question_time_delay = checkpoint - last_checkpoint
        last_checkpoint = checkpoint
        question_time_delay_min = int(question_time_delay.seconds/60.)
        question_time_delay_second = question_time_delay.seconds - question_time_delay_min*60.
        question_time_delay_list.append([question_time_delay_min,question_time_delay_second])
        #question_time_delay_list.append(question_time_delay)

    return question_time_delay_list