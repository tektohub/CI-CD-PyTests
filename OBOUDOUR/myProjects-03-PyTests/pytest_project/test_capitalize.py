# test_capitalize.py

import pytest

""" def capital_case(x):
    return x.capitalize() """

# OBO-24/01/2020 - error handling - test if arg is not a string : 
def capital_case(x):
    if not isinstance(x, str):
        raise TypeError('Please provide a string argument')

    return x.capitalize()

def test_capital_case():
    #assert capital_case('semaphore') == 'Semaphore'
    assert capital_case('myCapitalWord') == 'Mycapitalword' # OK - works 

def test_raises_exception_on_non_string_arguments():
    with pytest.raises(TypeError):
        capital_case(9)
        


