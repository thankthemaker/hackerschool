
from ssd1306 import draw_screen, initialize, clear_oled
from ssd1306_text import add_text

initialize()
clear_oled()
add_text(2, 1, "Hello")
add_text(2, 3, "World!")
draw_screen()