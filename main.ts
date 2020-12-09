input.onButtonPressed(Button.A, function () {
    if (timer == "on") {
        time = input.runningTime() - time
        timer = "off"
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    if (timer == "on") {
        time = input.runningTime() - time
        timer = "off"
        basic.clearScreen()
    }
})
let timer = ""
let time = 0
for (let i = 0; i <= 3; i++) {
    basic.showNumber(3 - i)
}
basic.clearScreen()
basic.pause(randint(100, 5000))
time = input.runningTime()
timer = "on"
basic.showIcon(IconNames.Target)
basic.forever(function () {
    if (timer == "off") {
        basic.showNumber(time)
    }
})
