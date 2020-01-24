""" from lib import ma_fonction_a_tester
from lib import ma_fonction_a_tester_2 """
#extraire_title(html)
from lib import extraire_title

#import urllib2

#import urllib

#import urllib.request

from urllib.request import urlopen
 
#import pytest
 
""" def test_function():
    assert ma_fonction_a_tester(1, 1) == 2 """

""" def test_function_2():
    assert ma_fonction_a_tester_2(1, 1) == (2, 2, 3) """
 
#@pytest.fixture
def exemple_html():
    url = "http://www.google.com"
    f = urlopen(url)
    myPageHtml = f.read()
    #print(file) : for tests
    #return urllib2.urlopen('http://www.google.com').read()
    #return urllib.request.urlopen('http://www.google.com').read()

    #: for tests only 
    print(myPageHtml) 
    
    return myPageHtml
 
""" def test_extraire_title(exemple_html):
    assert extraire_title(exemple_html) == 'Google' """

#: for tests only
exemple_html()

