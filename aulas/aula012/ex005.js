var votação = 28
console.log('CANDIDATOS E SEUS NUMEROS PARA VOTAÇÃO LOGO ABAIXO')
console.log(' BOLSONARO (22)')
console.log(' LULA (13)')
console.log(' PABLO MARÇAL (28)')
switch(votação) {
    case 22:
        console.log('votou em (BOLSONARO)')
        break
    case 13:
        console.log('votou em (LULA)')
        break
    case 28:
        console.log('votou em (PABLO MARÇAL)')
        break
    default:
        console.log('DIGITE UM NUMERO VALIDO!')
        break
}