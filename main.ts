input.onButtonPressed(Button.A, function () {
    // This makes it so that an if statement is triggered for each phase.
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
        // Checks the timer variable, subtracts 1 from it and displays it until it reaches o.
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
        // Triggers the flashing red as soon as phase 2 starts because the condition variable had been set to 2 on start.
        while (condition == 2) {
            pins.digitalWritePin(DigitalPin.P2, 1)
            basic.pause(500)
            pins.digitalWritePin(DigitalPin.P2, 0)
            basic.pause(500)
        }
    } else if (Phase == 3) {
        pins.digitalWritePin(DigitalPin.P2, 0)
        // Triggers the flashing yellow when button B has been pressed (decreases condition by 1)  and phase 3 is initiated.
        while (condition == 1) {
            pins.digitalWritePin(DigitalPin.P0, 1)
            basic.pause(500)
            pins.digitalWritePin(DigitalPin.P0, 0)
            basic.pause(500)
        }
    }
})
// Sets all variables and pins to how they were at the start; essentially resetting the program.
input.onButtonPressed(Button.AB, function () {
    Phase = 0
    timer = 12
    condition = 2
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
})
// Changes the condition to trigger one of the while loops.
input.onButtonPressed(Button.B, function () {
    condition += -1
})
// Sets the variables to their respective defaults for this program.
let condition = 0
let timer = 0
let Phase = 0
Phase = 0
timer = 12
condition = 2
basic.forever(function () {
	
})
