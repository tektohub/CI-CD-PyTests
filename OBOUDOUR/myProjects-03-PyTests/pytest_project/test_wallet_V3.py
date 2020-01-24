# test_wallet_V3.py

import pytest
from wallet import Wallet, InsufficientAmount

# test works : 
# @pytest.mark.parametrize("earned,spent,expected", [
#     (30, 10, 20),
#     (20, 2, 18),
# ])

@pytest.mark.parametrize("earned,spent,expected", [
    (70, 30, 40),
    (70, 30, 20),
])

def test_transactions(earned, spent, expected):
    my_wallet = Wallet()
    my_wallet.add_cash(earned)
    my_wallet.spend_cash(spent)
    assert my_wallet.balance == expected

# use of the test : 
    # My wallet initially has 0,
    # I add 30 units of cash to the wallet,
    # I spend 10 units of cash, and
    # I should have 20 units of cash remaining after the two transactions.