
import re

""" def ma_fonction_a_tester(a, b):
    return a + b


def ma_fonction_a_tester_2(a, b):
    return (a * 2, b * 2) """

 
def extraire_title(html):
    """
        Extrait le title d'une page HTML à base de regex. C'est mal.
        Why ? .... 
    """

    # OBO-24/01/2020 - error handling - test if arg is not a string : 
    # if not isinstance(x, str):
        #raise TypeError('Please provide a string argument') 
    try:
        return re.search(r'<title[^>]*>(.*)</title>', html).groups()[0]
    
    #except IndexError, AttributeError:
    except IndexError :
            return None
            #return 'Apple'

    #except error as e:   
            # debug error pattern 
            #return 'Google'
    """ else:
        return 'Google' """
 
""" 
test function in app main : ex: test.py 
    def test_function():
        assert ma_fonction_a_tester(1, 1) == (2, 2, 3) """