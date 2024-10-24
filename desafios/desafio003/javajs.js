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
    } else {
        window.alert('valor invalido ou já encontrado na lista')
    }
}