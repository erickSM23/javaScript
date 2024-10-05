function maior() {
    window.alert('digite um numero maior ou menor do que (100)')
    var n1 = window.prompt('digite o numero (ABAIXO)')
    var local = window.document.getElementById('local')
    if (n1 > 100) {
        local.innerText = `O VALOR (${n1}) É MAIOR QUE O VALOR (100)`
    } else if (n1 == 100){
        window.alert('DIGITE APENAS VALORES MAIORES OU MENORES QUE (100)')
        window.alert('digite um numero maior ou menor do que (100)')
        var n1 = window.prompt('digite o numero (ABAIXO)')
        var local = window.document.getElementById('local')
        if (n1 > 100) {
            local.innerText = `O VALOR (${n1}) É MAIOR QUE O VALOR (100)`
        } else if (n1 == 100){
            window.alert('DIGITE APENAS VALORES MAIORES OU MENORES QUE (100)')
        } else {
            local.innerText = `O VALOR (${n1}) É MENOR QUE O VALOR (100)`
        }
    } else {
        local.innerText = `O VALOR (${n1}) É MENOR QUE O VALOR (100)`
    }
}