function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var minute = data.getMinutes()
    var hora = data.getHours()
    //var hora = 13
    msg.innerHTML = `Agora são ${hora} horas e ${minute} minutos.`
    if(hora >= 00 && hora < 12) {
        img.src = 'fotomanha.png'
        document.body.style.background = '#b6a17d'
    } else if (hora > 12 && hora < 18) {
        img.src = 'fototarde.png'
        document.body.style.background = '#e9a146'
    } else {
        img.src = 'fotonoite.png'
        document.body.style.background = '#571c16'
    }
}