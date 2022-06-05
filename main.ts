input.onButtonPressed(Button.A, function () {
    direction = randint(0, 8)
    if (direction == 1) {
        basic.showString("N")
        degrees = 0
    } else if (direction == 2) {
        basic.showString("NE")
        degrees = 45
    } else if (direction == 3) {
        basic.showString("E")
        degrees = 90
    } else if (direction == 4) {
        basic.showString("SE")
        degrees = 135
    } else if (direction == 5) {
        basic.showString("S")
        degrees = 180
    } else if (direction == 6) {
        basic.showString("SW")
        degrees = 225
    } else if (direction == 7) {
        basic.showString("W")
        degrees = 270
    } else if (direction == 8) {
        basic.showString("NW")
        degrees = 315
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(score)
})
let bearing = 0
let degrees = 0
let direction = 0
let score = 0
if (input.buttonIsPressed(Button.A)) {
    input.calibrateCompass()
}
basic.showArrow(ArrowNames.North)
score = 0
basic.forever(function () {
    bearing = input.compassHeading()
})
basic.forever(function () {
    if (degrees - bearing > 10 || degrees - bearing < -10) {
        score += -1
    } else {
        score += 1
    }
})
