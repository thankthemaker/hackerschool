
input.onGesture(Gesture.Shake, function () {
    radio.sendString("boom")
})
radio.onReceivedString(function (receivedString) {
    basic.showIcon(IconNames.Skull)
    basic.pause(1000)
    basic.clearScreen()
})
