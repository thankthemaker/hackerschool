
let basketX2 = 2
let eggX2 = 2
let eggY2 = 0
let fallingPause = 300
basic.forever(function() {
    led.unplot(basketX2, 4)
    led.unplot(eggX2, eggY2)
    eggY2 += 1
    led.plot(eggX2, eggY2)
    basic.pause(300)
    let accX2 = input.acceleration(Dimension.X)
    basketX2 = 2 + Math.min(2, Math.max(-2, accX2 / 200))
    led.plot(basketX2, 4)
    if (eggY2 > 4) {
        eggY2 = -1
        eggX2 = Math.randomRange(0, 4)
    }
    if (eggY2 == 4) {
        if (basketX2 == eggX2) {
            game.addScore(1)
            if (game.score() %5 == 0) {
            }
        } else {
            game.removeLife(1)
        }
    }
    basic.pause(300)
})