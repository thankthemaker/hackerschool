
from microbit import *

while True:
    if button_a.was_pressed():
        display.show(Image.TRIANGLE)
        sleep(2000)
        display.clear()