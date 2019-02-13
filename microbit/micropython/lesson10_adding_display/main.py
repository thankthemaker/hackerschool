
import machine, ssd1306
i2c = machine.I2C(scl=machine.Pin(19), sda=machine.Pin(20))
oled = ssd1306.SSD1306_I2C(128, 64, i2c, 0x3c)
oled.fill(0)
oled.text("Hello World", 0, 0)
oled.show()