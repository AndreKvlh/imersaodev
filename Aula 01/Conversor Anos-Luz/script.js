
var km, ly;

function calcularDist() {
    km = parseFloat(document.querySelector("input").value);
    ly = km * 0.0000000000005078;
    alert(km.toFixed(2) + "Km = " + ly.toFixed(2) + "Ly")
}
