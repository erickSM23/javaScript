var testeV = [110, 10, 3313, 1, 10, 1000]

if (testeV[0] < 5) {
    console.log(`o numero ${testeV[0]} no indice (0) é menor que 5`)
} else if(testeV[0] >= 5){
    for (var contador = testeV[0]; contador >= 5; contador = contador - 1) {
        console.log(contador)
    }
    contador = contador + 1
    testeV[0] = contador 
    console.log(`portando o valor final do vetor é ${testeV[0]}`)
}

