
let item: neopixel.Strip = null
item = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGBW)
item.showRainbow(1, 360)
item.show()
basic.pause(500)
basic.forever(function () {
    item.rotate(1)
    item.show()
    basic.pause(500)
})
