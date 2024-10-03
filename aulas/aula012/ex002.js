var idade = 18
if (idade < 16) {
    console.log('você não pode votar com essa idade')
} else if (idade < 18) {
    console.log('seu voto é opicional')
} else if (idade >= 18 && idade <= 65) {
    console.log('seu voto é obrigatorio')
} else if (idade > 65 && idade <= 100) {
    console.log('voto opicional')
} else if(idade > 100){
    console.log('você atingiu o limite maximo. só vivos votam...')
} else {
    console.log('porfavor digite sua idade em numeros. caracteres não são aceitos na area de idade')
}