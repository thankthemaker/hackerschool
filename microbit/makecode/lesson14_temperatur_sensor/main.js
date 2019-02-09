
OLED.init(64, 128)
OLED.loadingScreen()
basic.forever(function () {
    OLED.showStringWithNewLine("Temperatur:")
    OLED.showNumberNoNewLine(Environment.temperature(DHT11Type.DHT11_temperature_C, DigitalPin.P13))
    OLED.showStringWithNewLine("Luftfeucht.:")
    OLED.showNumberNoNewLine(Environment.temperature(DHT11Type.DHT11_humidity, DigitalPin.P13))
    basic.pause(2000)
    OLED.clear()
})
