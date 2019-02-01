let counter = 0
function Countdown22() {
    counter = 6
    while (counter >= 0) {
        basic.showNumber(counter)
        counter += -1
    }
}
input.onButtonPressed(Button.A, function () {
    Countdown22()
})
