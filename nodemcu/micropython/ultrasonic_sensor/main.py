import machine
import utime
import ssd1306

def main():
    enabled = False
    led = machine.Pin(2, machine.Pin.OUT)
    trig = machine.Pin(12, machine.Pin.OUT)
    echo = machine.Pin(13, machine.Pin.IN)
    i2c = machine.I2C(scl=machine.Pin(5), sda=machine.Pin(4))
    oled = ssd1306.SSD1306_I2C(128, 64, i2c, 0x3c)

    while True:
      trig.off()
      utime.sleep_us(2)
      trig.on()
      utime.sleep_us(10)
      trig.off()
      while echo.value() == 0:
        pass
      t1 = utime.ticks_us()
      while echo.value() == 1:
        pass
      t2 = utime.ticks_us()
      cm = (t2 - t1) / 58.0
      print(cm)
      oled.fill(0)
      oled.text("Distanz: " + str(cm), 0, 0)
      oled.show()
      if enabled:
        led.off()
      else:
        led.on()
      utime.sleep_ms(1000)
      enabled = not enabled
      utime.sleep(2)

if __name__ == '__main__':
    main()