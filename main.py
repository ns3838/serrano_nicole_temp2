f = input.temperature(TemperatureUnit.FAHRENHEIT)
c = input.temperature(TemperatureUnit.CELSIUS)
if f>70:
    light.set_all(light.rgb(255,0,0))
elif f>40:
    light.set_all(light.rgb(0,255,0))
else:
    light.set_all(light.rgb(0,0,255))
