var tempCelsius, tempFahrenheit, tempKelvin;
/*var tempFahrenheit = (tempCelsius * 1.8) + 32;
var tempKelvin = tempCelsius + 273.15;*/

function calcularTemp() {
    var temp = parseFloat(document.querySelector("input").value);
    var tipoTemp = document.querySelector("select").value;
    switch (tipoTemp) {
        case "celsius":
            tempCelsius = temp;
            tempFahrenheit = (tempCelsius * 1.8) + 32;
            tempKelvin = tempCelsius + 273.15;
            alert(tempCelsius.toFixed(1) + "ºC = " + tempFahrenheit.toFixed(1) + "º F / " + tempKelvin.toFixed(1) + " K");
            break;
        case "fahrenheit":
            tempFahrenheit = temp;
            tempCelsius = (tempFahrenheit - 32) / 1.8
            tempKelvin = tempCelsius + 273.15;
            alert(tempFahrenheit.toFixed(1) + "ºF = " + tempCelsius.toFixed(1) + "º C / " + tempKelvin.toFixed(1) + " K");
            break;
        case "kelvin":
            tempKelvin = temp;
            tempCelsius = tempKelvin - 273.15;
            tempFahrenheit = (tempCelsius * 1.8) + 32;
            alert(tempKelvin.toFixed(1) + "K = " + tempCelsius.toFixed(1) + "º C / " + tempFahrenheit.toFixed(1) + " ºF");
            break;
    }
}