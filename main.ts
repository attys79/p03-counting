basic.forever(function () {
    for (let i = 0; i <= 9; i++) {
        basic.showNumber(i)
        basic.pause(1000)
    }
    for (let i = 0; i <= 7; i++) {
        basic.showNumber(8 - i)
        basic.pause(1000)
    }
})
