input.onButtonPressed(Button.A, function () {
    Phase += 1
    if (Phase == 1) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        basic.pause(4000)
        while (timer > 0) {
            timer += -1
            basic.showNumber(timer)
            basic.pause(1000)
        }
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else if (Phase == 2) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.clearScreen()
        while (condition == 2) {
            pins.digitalWritePin(DigitalPin.P2, 1)
            basic.pause(500)
            pins.digitalWritePin(DigitalPin.P2, 0)
            basic.pause(500)
        }
    } else if (Phase == 3) {
        pins.digitalWritePin(DigitalPin.P2, 0)
        while (condition == 1) {
            pins.digitalWritePin(DigitalPin.P0, 1)
            basic.pause(500)
            pins.digitalWritePin(DigitalPin.P0, 0)
            basic.pause(500)
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    condition += -1
})
let condition = 0
let timer = 0
let Phase = 0
Phase = 0
timer = 12
condition = 2
basic.forever(function () {
	
})
