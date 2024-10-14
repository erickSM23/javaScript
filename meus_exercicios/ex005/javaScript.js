function contar() {
    var começo = window.document.getElementById('n1')
    var fim = window.document.getElementById('n2')
    var passo = window.document.getElementById('n3')
    var local = window.document.getElementById('local')
    if (começo.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('prencha tudo')
    } else {
        var co = Number(começo.value)
        var fi = Number(fim.value)
        var pa = Number(passo.value)
        if (co < fi) {
            for (var contador = co; contador <= fi; contador = contador + pa) {
                local.innerHTML += `${contador}`
            }
        }
    }
}