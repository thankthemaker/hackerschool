
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
strip.setBrightness(50)
strip.showRainbow(1, 360)
basic.forever(function () {
    strip.rotate(1)
    basic.pause(1000)
})
