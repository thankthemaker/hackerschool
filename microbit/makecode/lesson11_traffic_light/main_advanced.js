
let counter = 0
function countdown() {
    counter = 5
    for (let i = 0; i < 5; i++) {
        basic.showNumber(counter)
        basic.pause(1000)
        counter += -1
    }
}
function stop() {
    basic.showLeds(`
        . . . . #
        . . . # .
        . . # . .
        . # . . .
        # . . . .
        `)
    basic.pause(2000)
}
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    countdown()
    pins.digitalWritePin(DigitalPin.P1, 1)
    stop()
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    countdown()
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    stop()
    pins.digitalWritePin(DigitalPin.P1, 0)
})
