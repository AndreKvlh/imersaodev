function adicionarFilme() {
    var linkFilme = document.querySelector('input').value;
    document.getElementById('listaFilmes').innerHTML += '<img src=' + linkFilme + '>';
}