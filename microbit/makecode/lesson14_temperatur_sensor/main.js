
OLED.init(64, 128)
dht11_dht22.queryData(
  DHTtype.DHT11,
  DigitalPin.P13,
  true,
  false,
  true
)
basic.forever(function () {
    OLED.writeStringNewLine("Temperatur:")
    OLED.writeNum(dht11_dht22.readData(dataType.temperature))
    OLED.writeStringNewLine("Luftfeucht.:")
    OLED.writeNum(dht11_dht22.readData(dataType.humidity))
    basic.pause(2000)
    OLED.clear()
})
