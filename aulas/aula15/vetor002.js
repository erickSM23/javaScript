vetor = [20, 50, 30, 10, 40]
vetor.sort()

// VERSÃO COMPLETA (permite ter mais controle sobre os valores e objetos presentes no bloco de codigo) 
for (contador = 0; contador < vetor.length; contador ++) {
    console.log(`indice ${contador} [${vetor[contador]}]`)
}

// versão simplificada (rapido e facil de fazer)
/*
for (var contador in vetor) {
    console.log(`indice ${contador} [${vetor[contador]}]`)
}
*/