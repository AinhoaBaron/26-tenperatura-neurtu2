let temperatura = 0
music.setVolume(255)
basic.forever(function () {
    if (temperatura < 20) {
        music.playTone(392, music.beat(BeatFraction.Quarter))
        music.playTone(330, music.beat(BeatFraction.Quarter))
    }
    if (temperatura > 20) {
        music.playTone(370, music.beat(BeatFraction.Quarter))
        music.playTone(311, music.beat(BeatFraction.Quarter))
    }
})
basic.forever(function () {
    temperatura = input.temperature()
    basic.showNumber(input.temperature())
    if (temperatura < 20) {
        basic.showIcon(IconNames.Chessboard)
    }
    if (temperatura > 20) {
        basic.showIcon(IconNames.Square)
    }
})
