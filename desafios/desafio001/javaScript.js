function contando() {
    var resposta = window.document.getElementById('local')
    resposta.innerHTML = '...'
    var inicio = Number.parseInt(window.document.getElementById('n1').value)
    var fim = Number.parseInt(window.document.getElementById('n2').value)
    var passo = Number.parseInt(window.document.getElementById('n3').value)
    
    for (var contador = inicio; contador <= fim; contador = contador + passo) {
        resposta.innerHTML += `${contador} `
    }
}