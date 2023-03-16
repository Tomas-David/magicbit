function ping(
    trig: DigitalPin,
    echo: DigitalPin,
    maxCmDistance = 500): number{
        pins.setPull(trig, PinPullMode.PullNone)
        pins.digitalWritePin(trig, 0)
        control.waitMicros(2)
        pins.digitalWritePin(trig, 1)
        control.waitMicros(10)
        pins.digitalWritePin(trig, 0)
        let duration = pins.pulseIn(echo, PulseValue.High, (1/340) * 10)
        
        return duration / ((331 + 0.607 * (input.temperature() - 4))/10)
    }

    

    basic.forever(function() {
        console.logValue("d", ping(DigitalPin.P8, DigitalPin.P15))
    })

    