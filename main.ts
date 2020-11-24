let f = input.temperature(TemperatureUnit.Fahrenheit)
let c = input.temperature(TemperatureUnit.Celsius)
if (f > 70) {
    light.setAll(light.rgb(255, 0, 0))
} else if (f > 40) {
    light.setAll(light.rgb(0, 255, 0))
} else {
    light.setAll(light.rgb(0, 0, 255))
}

