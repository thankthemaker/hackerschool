let ssp = 0
radio.onReceivedNumber(function (friendValue) {
    friendValue = friendValue
    if (ssp == 1) {
        if (friendValue == 1) {
            basic.showIcon(IconNames.Asleep)
        } else if (friendValue == 2) {
            basic.showIcon(IconNames.Happy)
        } else {
            basic.showIcon(IconNames.Sad)
        }
    } else if (ssp == 2) {
        if (friendValue == 1) {
            basic.showIcon(IconNames.Sad)
        } else if (friendValue == 2) {
            basic.showIcon(IconNames.Asleep)
        } else {
            basic.showIcon(IconNames.Happy)
        }
    } else {
        if (friendValue == 1) {
            basic.showIcon(IconNames.Happy)
        } else if (friendValue == 2) {
            basic.showIcon(IconNames.Sad)
        } else {
            basic.showIcon(IconNames.Asleep)
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    ssp = Math.randomRange(1, 3)
    if (ssp == 1) {
        basic.showIcon(IconNames.Scissors)
    } else if (ssp == 2) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
    basic.pause(2000)
    radio.sendNumber(ssp)
})
radio.setGroup(122)
