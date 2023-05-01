basic.showIcon(IconNames.Heart)
cuteBot.forward()
basic.forever(function () {
    cuteBot.forward()
    basic.pause(200)
    cuteBot.motors(100, 40)
    basic.pause(1000)
    cuteBot.forward()
    basic.pause(200)
    cuteBot.forward()
    basic.pause(200)
    cuteBot.motors(40, 100)
    basic.pause(1000)
    cuteBot.forward()
    basic.pause(200)
})
basic.forever(function () {
    if (input.lightLevel() < 10) {
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_R, 255, 255, 255)
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_L, 255, 255, 255)
    } else {
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_R, 0, 0, 0)
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_L, 0, 0, 0)
    }
    basic.pause(1000)
})
