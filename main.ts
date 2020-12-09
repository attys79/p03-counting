input.onButtonPressed(Button.A, function () {
    if (timer == "on") {
        timer = "off"
        time = input.runningTime() - time
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    if (timer == "on") {
        timer = "off"
        time = input.runningTime() - time
        basic.clearScreen()
    }
})
let time = 0
let timer = ""
for (let i = 0; i <= 3; i++) {
    basic.showNumber(3 - i)
}
basic.clearScreen()
basic.pause(randint(100, 5000))
timer = "on"
time = input.runningTime()
basic.showIcon(IconNames.Target)
basic.forever(function () {
    if (timer == "off") {
        basic.showNumber(time)
    }
})
