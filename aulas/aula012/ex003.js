var horas = 22
if (horas <= 6) {
    console.log(`agora são ${horas} da madrugada`)
} else if (horas <= 11) {
    console.log(`agora são ${horas} da manha`)
} else if (horas <= 18) {
    console.log(`agora são ${horas} da tarde`)
} else if(horas >= 19 && horas <= 23){
    console.log(`agora são ${horas} da noite`)
} else {
    console.log('digite um horario valido...')
}