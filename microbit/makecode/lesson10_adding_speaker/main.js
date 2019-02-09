
music.beginMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
basic.forever(function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
})
