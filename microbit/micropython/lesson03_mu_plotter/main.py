
from microbit import *

flag = True

while True:
    sleep(20)
    if button_a.was_pressed():
        flag = not flag
 
    if flag:
        print((accelerometer.get_x(), ))
    else:
        print(accelerometer.get_values())
