
from microbit import *

def prim(candidate):
    if candidate < 2:
        return False
    
    if candidate == 2:
        return True

    if candidate % 2 == 0:
        return False

    x = 3
    while True:
        if x < candidate:
            if candidate % x == 0:
                return False
            x = x + 2
        else:
            return True
    
for candidate in range(1, 100):
    if(prim(candidate)):
        print(candidate) 