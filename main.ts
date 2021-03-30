input.onButtonPressed(Button.A, function () {
    Phase += 1
    if (Phase == 1) {
        basic.showString("WALK")
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
let Phase = 0
Phase = 0
basic.forever(function () {
	
})
