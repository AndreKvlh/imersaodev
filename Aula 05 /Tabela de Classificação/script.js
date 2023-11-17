var jogadores = [
    {
        nome: 'Paulo',
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        pontos: 0
    },
    {
        nome: 'Rafa',
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        pontos: 0 
    }
]

gerarTabela()

function gerarTabela() {
    var tabela = '';
    for (var i = 0; i < jogadores.length; i++) {
        tabela += `
        <tr>
            <td>${jogadores[i].nome}</td>
            <td>${jogadores[i].vitorias}</td>
            <td>${jogadores[i].empates}</td>
            <td>${jogadores[i].derrotas}</td>
            <td>${jogadores[i].pontos}</td>
            <td><button onClick="adicionarVitoria('${jogadores[i].nome}')">Vitória</button></td>
            <td><button onClick="adicionarEmpate('${jogadores[i].nome}')">Empate</button></td>
            <td><button onClick="adicionarDerrota('${jogadores[i].nome}')">Derrota</button></td>
        </tr>
    `
    }
    document.getElementById("tabelaJogadores").innerHTML = tabela;
}

function adicionarVitoria(jogador) {
    for (var i = 0; i < jogadores.length; i++){
        if (jogadores[i].nome == jogador) {
            jogadores[i].vitorias++;
            jogadores[i].pontos += 3;
        }
    }
    gerarTabela();
}

function adicionarEmpate(jogador) {
    for (var i = 0; i < jogadores.length; i++){
        if (jogadores[i].nome == jogador) {
            jogadores[i].empates++;
            jogadores[i].pontos++;
        }
    }
    gerarTabela();
}

function adicionarDerrota(jogador) {
    for (var i = 0; i < jogadores.length; i++){
        if (jogadores[i].nome == jogador) {
            jogadores[i].derrotas++;
        }
    }
    gerarTabela();
}

function adicionarJogador() {
    var nomeDigitado = document.querySelector('input').value;
    if (nomeDigitado.trim() == '') {
        alert('Insira um nome!')
    } else {
        var novoJogador = {
        nome: nomeDigitado,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        pontos: 0
        }
        jogadores.push(novoJogador);
        gerarTabela();
    }
}

function zerarTabela() {
    for (var i = 0; i < jogadores.length; i++) {
        jogadores[i].vitorias = 0;
        jogadores[i].empates = 0;
        jogadores[i].derrotas = 0;
        jogadores[i].pontos = 0;
    }
    gerarTabela()
}