
radio.onReceivedValue(function (name, value) {
    basic.showString("" + name + "=" + value)
    basic.pause(100)
    basic.clearScreen()
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendValue("L", input.acceleration(Dimension.Y))
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendValue("R", input.acceleration(Dimension.Y))
})
radio.setGroup(1)
