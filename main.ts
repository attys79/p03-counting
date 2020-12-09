let time = 0
let stopwatch = ""
input.onButtonPressed(Button.A, function () {
    time = input.runningTime()
    stopwatch = "start"
    led.stopAnimation()
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    time = 0
    led.stopAnimation()
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    time = input.runningTime() - time
    stopwatch = "stop"
    led.stopAnimation()
    basic.clearScreen()
})
basic.forever(function () {
    if (stopwatch == "start") {
        led.toggle(2, 2)
        basic.pause(100)
    } else {
        basic.showNumber(time)
    }
})
