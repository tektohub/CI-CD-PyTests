

import sqlite3

conn = sqlite3.connect('myquotes.db')

curr = conn.cursor()

# <editor-fold desc="Description">
# curr.execute("""create table quotes_tb(
                             # title text
                                # author text
                                # tag text
                                # )
            # """)
# </editor-fold>
             
               
                
curr.execute("""insert into quotes_tb values (
                                            'make it simple with Python',
                                            'OBO',
                                            'Python'
                                             )
            """)

curr.execute("""insert into quotes_tb values (
                                            '2-quote 2',
                                            'OBO',
                                            'DevOps'
                                             )
            """)

conn.commit()

conn.close()


                
                