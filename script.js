
let jogador = "X"

function start(element) {
    if (element.innerHTML) return  
    element.innerHTML = jogador
    trocarJogador()
}

function trocarJogador() {

    if (jogador == "X") {
        jogador = "O"
    } else {
        jogador = "X"
    }
}