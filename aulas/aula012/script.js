function carregar() {
    var mensagem = window.document.getElementById('mensagem')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    mensagem.innerText = `agora são ${hora} horas`
    mensagem.style.textAlign = 'center'
    if (hora >= 0 && hora <= 11) {
        //bom dia
        imagem.style.backgroundImage = 'url("imagens/manha.jpg")'
        window.document.body.style.backgroundColor = '#FACF1A'
    }else if (hora >= 12 && hora <= 18) {
        //boa tarde
        imagem.style.backgroundImage = 'url("imagens/tarde.jpg")'
        window.document.body.style.backgroundColor = '#7F94B1'
    }else {
        //boa noite
        imagem.style.backgroundImage = 'url("imagens/noite.jpg")'
        window.document.body.style.backgroundColor = '#071C2D'
    }

}