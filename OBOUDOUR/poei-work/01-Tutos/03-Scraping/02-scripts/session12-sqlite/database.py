

import sqlite3

conn = sqlite3.connect('myquotes.db')

curr = conn.cursor()

curr.execute("""create table quotes_tb(
                                title text,
                                author text,
                                tag text
                                )
            """)
             
               
                
# curr.execute("""insert into quotes_tb values (
                                            # 'make it simple with Python',
                                            # 'OBO',
                                            # 'Python'
                                             # )
            # """)
            
conn.commit()

conn.close()


                
                