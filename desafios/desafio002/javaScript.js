function gerar() {
    var n1 = Number(window.document.getElementById('n1').value)
    var local = window.document.getElementById('response')
    local.innerHTML = '...'
    for (contador = 0; contador <= 10; contador ++) {
        soma = contador * n1
        local.innerHTML += `<p>${contador} x ${n1} = ${soma}</p>`
    }
}