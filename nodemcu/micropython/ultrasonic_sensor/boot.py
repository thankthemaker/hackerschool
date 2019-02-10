import time
import machine
import micropython
import network
import esp
esp.osdebug(None)
import gc
gc.collect()
import webrepl
webrepl.start()

ssid = ''
password = ''
station = network.WLAN(network.STA_IF)

station.active(True)
station.connect(ssid, password)

while station.isconnected() == False:
  pass

print('WiFi connection successful')
print(station.ifconfig())