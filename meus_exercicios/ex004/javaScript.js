function tabuada() {
    var n1 = window.document.getElementById('n1')
    var local = window.document.getElementById('local')

    if (n1.value.length == 0) {
        window.alert('porfavor difgite um numero valido')
    } else {
        numero = Number(n1.value)
        local.innerHTML = null
        for (var contador = 0; contador <= 10; contador ++) {
            soma = contador * numero
            local.innerHTML += `<p>${numero} X ${contador} = ${soma}</p>`
        }
    }
}