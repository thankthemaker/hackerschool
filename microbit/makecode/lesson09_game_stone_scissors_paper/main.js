
let waffe = 0
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    waffe = Math.randomRange(1, 3)
    if (waffe == 1) {
        basic.showIcon(IconNames.Square)
    } else if (waffe == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (waffe == 3) {
        basic.showIcon(IconNames.Scissors)
    }
})
