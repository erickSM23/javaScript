function fatorial(f) {
    fat = 1
    for (var contador = f; contador > 1; contador --) {
        fat = fat * contador
    }
}

console.log(fatorial(3))