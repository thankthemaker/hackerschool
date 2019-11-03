
maqueen.IR_callbackUser(function (message) {
    if (message == 66) {
        maqueen.MotorRun(maqueen.aMotors.All, maqueen.Dir.CW, 255)
    }
    if (message == 67) {
        maqueen.MotorRun(maqueen.aMotors.All, maqueen.Dir.CCW, 255)
    }
    if (message == 68) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CCW, 100)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 100)
    }
    if (message == 69) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 100)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CCW, 100)
    }
    if (message == 111) {
        maqueen.motorStop(maqueen.aMotors.All)
    }
})
