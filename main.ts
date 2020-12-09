input.onButtonPressed(Button.A, function () {
    if (count > 0) {
        count += -1
    }
})
input.onButtonPressed(Button.B, function () {
    if (count < 9) {
        count += 1
    }
})
let count = 0
count = 0
basic.forever(function () {
    basic.showNumber(count)
})
