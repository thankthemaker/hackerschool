from machine import Pin
from neopixel import NeoPixel

pin = Pin(5, Pin.OUT)   # set GPIO0 to output to drive NeoPixels
np = NeoPixel(pin, 1)   # create NeoPixel driver on GPIO05 for 1 pixel
np[0] = (255, 255, 255) # set the first pixel to white
np.write()      