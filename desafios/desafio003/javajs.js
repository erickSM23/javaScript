let inputt  = window.document.getElementById('n1') 
let lista   = window.document.getElementById('tabuada')
let local   = window.document.getElementById('local')
let valores = []

function isNumero(n) {
    if (Number(n) >=1 && n <=100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function add() {
    if (isNumero(inputt.value) && !inLista(inputt.value, valores)) {
       valores.push(Number(inputt.value))
       let item = window.document.createElement('option')
       item.text = `valor ${inputt.value} adicionado`
       lista.appendChild(item)
       local.innerHTML = ''
    } else {
        window.alert('valor invalido ou já encontrado na lista')
    }
    inputt.value = ''
    inputt.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        let menor = valores[0]
        let maior = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma = soma + valores[pos]
            if (valores[pos] > maior) 
                maior = valores[pos]
            if (valores[pos] < menor) 
                menor = valores[pos]
        }

        local.innerHTML = ''
        local.innerHTML += `<p>ao todo temos ${tot} numeros cadastrados</p>`
        if (tot - 1 == 1) {
            local.innerHTML += `<p>temos ${tot - 1} índice</p>`
        } else {
            local.innerHTML += `<p>são ${tot - 1} índices</p>`
        }
        local.innerHTML += `<p>o maior numero digitado é ${maior}</p>`
        local.innerHTML += `<p>o manor numero digitado é ${menor}</p>`
        local.innerHTML += `<p>somando todos os valores temos o numero ${soma}</p>`
        media = soma / tot
        local.innerHTML += `<p>a media final é de ${media}</p>`
    }
}