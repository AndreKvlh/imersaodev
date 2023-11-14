var tempCelsius = parseFloat(prompt("Digite a temperatura em Celsius (ºC): "));
var tempFahrenheit = (tempCelsius * 1.8) + 32;
var tempKelvin = tempCelsius + 273.15;

alert(tempCelsius.toFixed(1) + " ºC = " + tempFahrenheit.toFixed(1) + " ºF / " + tempKelvin.toFixed(1) + " K")