let compte = 0
input.onButtonPressed(Button.A, function () {
    compte = compte + 1
    basic.showNumber(compte)
})
input.onButtonPressed(Button.B, function () {
    compte = compte - 1
    basic.showNumber(compte)
})
basic.forever(function () {
    if (compte >= 10) {
        basic.showIcon(IconNames.No)
    }
})
basic.forever(function () {
    if (compte > 0) {
        basic.showNumber(0)
    }
})
