function load() {
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `<p>Agora são ${hora} horas</p>`

    if (hora >= 0 && hora < 12) {
        // Bom dia
        img.src = 'img/manha.jpg'
        document.body.style.background = '#ffff7d'
    } else if (hora >= 12 && hora <= 18) {
        // Boa tarde
        img.src = 'img/tarde.jpg'
        document.body.style.background = '#ffa333'
    } else {
        // Boa noite
        img.src = 'img/noite.jpg'
        document.body.style.background = 'rgb(24, 24, 24)'
    }
}