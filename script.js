let jogador = "X"

function marca(celula) {
    celula.innerHTML = jogador

    if (jogador == "X") {
        jogador = "O"
    } else {
        jogador = "X"
    }
}