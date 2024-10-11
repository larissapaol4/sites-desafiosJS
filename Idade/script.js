function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
  
    var res = window.document.getElementById('resultado')

    var year = window.document.getElementById('year')
    var nasc = Number(year.value)
    var calc = ano - nasc
 
    var fsex = window.document.getElementsByName('radsex')
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if(fsex[0].checked) {
        genero = 'Homem'
        if(calc < 21) {
            img.setAttribute('src', 'hjovem.png')
        } else if(calc < 50) {
            img.setAttribute('src', 'hadulto.png')
        } else {
            img.setAttribute('src', 'hidoso.png')
        }
    } else {
        genero ='Mulher'
        if(calc < 21) {
            img.setAttribute('src', 'mjovem.png')
        } else if(calc < 50) {
            img.setAttribute('src', 'madulta.png')
        } else {
            img.setAttribute('src', 'midosa.png')
        }
    }

    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${calc} anos!`
    res.appendChild(img)
    }