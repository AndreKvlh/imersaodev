
var moeda;
var valor;
var valorConv;

while (moeda == null) {
    moeda = prompt("Qual moeda você deseja converter em real?")
    switch (moeda) {
        case "Dólar":
            valor = parseInt(prompt("Insira o valor a ser convertido: "));
            valorConv = valor * 4.856;
            alert("US$ " + valor.toFixed(2) + " = R$ " + valorConv.toFixed(2));
            break
        case "Euro":
            valor = parseInt(prompt("Insira o valor a ser convertido: "));
            valorConv = valor * 5.242;
            alert("EUR " + valor.toFixed(2) + " = R$ " + valorConv.toFixed(2));
            break
        default:
            moeda = null
            alert("Selecione entre Dólar ou Euro para ser convertido")
    }
}