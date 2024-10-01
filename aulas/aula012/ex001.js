var idade = 77
if (idade < 16) {
    console.log('não vota')
} else if (idade >= 16 && idade < 18) {
    console.log('voto opicional')
} else if (idade >= 18 && idade < 90) {
    console.log('voto obrigatorio')
} else if(idade > 90){
    console.log('você atingiu o limite de idade não pode mais votar sinto muito')
} else {
    console.log('impossivel')
}