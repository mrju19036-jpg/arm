input.onButtonPressed(Button.A, function () {
    basic.showNumber(0)
})
basic.showIcon(IconNames.Happy)
basic.pause(2000)
basic.showString("Arm")
basic.showNumber(2025)
basic.forever(function () {
    music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.UntilDone)
})
