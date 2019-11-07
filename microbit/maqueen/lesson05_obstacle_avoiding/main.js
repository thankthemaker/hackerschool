
let item = false
basic.forever(function () {
    if (Maqueen.Ultrasonic(PingUnit.Centimeters) < 35 && Maqueen.Ultrasonic(PingUnit.Centimeters) != 0) {
        item = Math.randomBoolean()
        if (item == true) {
            Maqueen.MotorRun(Maqueen.Motors.M1, Maqueen.Dir.CW, 255)
            Maqueen.MotorRun(Maqueen.Motors.M2, Maqueen.Dir.CW, 0)
            basic.pause(800)
        }
        if (item == false) {
            Maqueen.MotorRun(Maqueen.Motors.M1, Maqueen.Dir.CW, 0)
            Maqueen.MotorRun(Maqueen.Motors.M2, Maqueen.Dir.CW, 255)
            basic.pause(800)
        }
    } else {
        Maqueen.MotorRun(Maqueen.Motors.All, Maqueen.Dir.CW, 255)
    }
})
