from func import *
import glob
import re
import datetime
import time

#create question dictionnary
question_dic,clean_name_list = create_question_dic()

#get user name
user_name = ask_user_name()

#choose question type
question_type = "django"
#question_type = choose_question_type(clean_name_list)

#get all questions in the type
lines = question_dic[question_type]

#ask for number of questions
#questions_nb = read_question_nb(len(lines))
questions_nb = 3

#select questions
question_list = lines_sample(lines,questions_nb)

#ask questions and store answers and answer times
if question_list:
    #init reponse list
    reponse_list=[]

    #start chrono
    question_start = datetime.datetime.now()
    question_time_checkpoints=[question_start]
    question_id_list=[]

    #ask questions and store answer
    for question in question_list:

        question_id = int(re.search('\d+', question).group())
        question_id_list.append(question_id)

        while True:
            reponse = input(question + "\n" )
            if reponse:
                reponse_list.append(reponse)
                break
            else:
                print("Veuillez entrer votre réponse")

        question_time_checkpoints.append(datetime.datetime.now())        

    #stop chrono
    question_end = question_time_checkpoints[-1]
    #calcul du temps de reponse total
    question_time_delay_total = question_end - question_start
    question_time_delay_total_min = int(question_time_delay_total.seconds/60.)
    question_time_delay_total_second = question_time_delay_total.seconds - question_time_delay_total_min*60.

    #calcul des temps de reponse par question
    question_time_delay_list = get_question_time_delay(question_time_checkpoints)

    #affichage du temps de reponse total
    print("\n")
    print("Vous avez mis",question_time_delay_total_min,"minutes et",question_time_delay_total_second,"secondes pour répondre.\n")
    
    #ecriture des reponses
    write_reponses(questions_nb,question_id_list,user_name,reponse_list,question_time_delay_list,question_time_delay_total_min,question_time_delay_total_second)

    #affichage des reponses
    print_reponses(questions_nb,question_list,reponse_list,question_time_delay_list)