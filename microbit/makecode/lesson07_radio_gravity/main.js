
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(1)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(2)
})
radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("" + receivedNumber)
    basic.pause(100)
    basic.clearScreen()
})
radio.setGroup(1)
