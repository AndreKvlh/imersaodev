var numeroSecreto = parseInt((Math.random() * 1000) + 1);
var tentativas = 3;
var resultado;

function advinhar() {
    var palpite = parseInt(document.querySelector("input").value);
    
    if (tentativas > 1) {
        if (palpite == numeroSecreto) {
            resultado = 'ACERTOU!';
        } else if (palpite < numeroSecreto) {
            resultado = 'Um pouco mais...'
            tentativas--;
        } else if (palpite > numeroSecreto) {
            resultado = 'Um pouco menos...'
            tentativas--;
        }
        document.getElementById("resultado").innerHTML = resultado;
        document.getElementById('tentativas').innerHTML = 'Tentativas restantes: ' + tentativas.toString();
    } else {
        document.getElementById("resultado").innerHTML = 'O número que pensei foi ' + numeroSecreto;
        document.getElementById('tentativas').innerHTML = 'Sem mais tentativas restantes!';
    }
}