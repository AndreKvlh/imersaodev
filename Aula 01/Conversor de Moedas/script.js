var valorConvertido;

function cotacao() {
    var valor = parseInt(document.querySelector('input').value);
    var moeda = document.querySelector('select').value;
    switch (moeda) {
        case 'dolar':
            valorConvertido = valor * 4.862;
            alert('US$ ' + valor.toFixed(2) + ' = R$ ' + valorConvertido.toFixed(2));
            break;
        case 'euro':
            valorConvertido = valor * 5.291;
            alert('EUR ' + valor.toFixed(2) + ' = R$ ' + valorConvertido.toFixed(2));
            break;
        case 'bitcoin':
            valorConvertido = valor * 174635.98;
            alert('BTC ' + valor.toFixed(2) + ' = R$ ' + valorConvertido.toFixed(2));
            break
    }
}
