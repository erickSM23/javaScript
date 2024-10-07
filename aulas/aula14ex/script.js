function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var iano = window.document.getElementById('iano')
   var local = window.document.getElementById('resposta')
   var imagem = window.document.getElementById('imagem')
   if (iano.value.length == 0 || iano.value > ano) {
    window.alert('[ERRO] verifique os dados e tente novamente!')
   } else {
        var sex = window.document.getElementsByName('sex')
        var idade = ano - Number(iano.value)
        var genero = ''
        if(sex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 11) {
                //criança
                imagem.style.backgroundImage = 'url("imagens/menino.jpg")'
                imagem.style.backgroundPosition = 'center center'
                imagem.style.display = 'block'
            } else if (idade < 21) {
                imagem.style.backgroundImage = 'url("imagens/jovem_homem.jpg")'
                imagem.style.backgroundPosition = 'center center'
                imagem.style.display = 'block'
            } else if (idade < 50) {
                //adulto
                imagem.style.backgroundImage = 'url("imagens/homem_adulto.png")'
                imagem.style.backgroundPosition = 'center center'
                imagem.style.display = 'block'
            } else {
                imagem.style.backgroundImage = 'url("imagens/homem_idoso.jpg")'
                imagem.style.backgroundPosition = 'center center'
                imagem.style.display = 'block'
            } 
        } else if (sex[1].checked){
            genero = 'mulher'
            if (idade >= 0 && idade < 11) {
                imagem.style.backgroundImage = 'url("imagens/menina.jpg")'
                imagem.style.backgroundPosition = 'center center'
                imagem.style.display = 'block'
            } else if (idade < 21) {
                imagem.style.backgroundImage = 'url("imagens/jovem_mulher.jpg")'
                imagem.style.backgroundPosition = 'center top'
                imagem.style.display = 'block'
            } else if (idade < 50) {
                imagem.style.backgroundImage = 'url("imagens/mulher_adulta.jpg")'
                imagem.style.backgroundPosition = 'center center'
                imagem.style.display = 'block'
            } else {
                //idosa
                imagem.style.backgroundImage = 'url("imagens/mulher_idosa.jpg")'
                imagem.style.backgroundPosition = 'center center'
                imagem.style.display = 'block'
            }
        }
        local.style.textAlign = 'center'
        local.innerHTML = `detectamos ${genero} de ${idade} anos`
    }
}