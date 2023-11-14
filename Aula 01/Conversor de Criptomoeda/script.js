var valor = parseFloat(prompt("Digite o valor a ser convertido em R$: "));
var valorBtc =  valor * 0.0000056;

alert("R$ " + valor.toFixed(2) + " = BTC " + valorBtc.toFixed(2))