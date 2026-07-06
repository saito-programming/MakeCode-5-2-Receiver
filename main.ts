radio.onReceivedNumber(function (receivedNumber) {
    basic.showIcon(IconNames.Happy)
    music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Asleep)
})
radio.setGroup(1)
basic.showIcon(IconNames.Asleep)
