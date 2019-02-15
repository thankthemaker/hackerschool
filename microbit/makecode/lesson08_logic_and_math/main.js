let b = 0
let a = 0
input.onButtonPressed(Button.A, function () {
    a = Math.randomRange(0, 10)
    b = Math.randomRange(0, 10)
    basic.showString("" + a + "+" + b)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("=" + (a + b))
})
