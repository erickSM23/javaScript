var agora = new Date()
var daySem = agora.getDay()

switch(daySem) {
    case 0:
        console.log('dia atual: (DOMINGO)')
        break
    case 1:
        console.log('dia atual: (SEGUNDA)')
        break
    case 2:
        console.log('dia atual: (TERÇA)')
        break
    case 3:
        console.log('dia atual: (QUARTA)')
        break
    case 4:
        console.log('dia atual: (QUINTA)')
        break
    case 5:
        console.log('dia atual: (SEXTA)')
        break
    case 6:
        console.log('dia atual (SABADO)')
        break
    default: 
        console.log('dia invalido')
        break
}