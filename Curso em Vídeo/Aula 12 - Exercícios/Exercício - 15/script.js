function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')

    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // CRIANÇA
                img.setAttribute('src', 'img/masc/crianca.jpg')
                img.style.width = '120px'
                img.style.height = '120px'
                img.style.border = 'none'
                img.style.borderRadius = '50%'
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'img/masc/jovem.jpg')
                img.style.width = '120px'
                img.style.height = '120px'
                img.style.border = 'none'
                img.style.borderRadius = '50%'
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'img/masc/adulto.jpg')
                img.style.width = '120px'
                img.style.height = '120px'
                img.style.border = 'none'
                img.style.borderRadius = '50%'
            } else {
                // Idoso
                img.setAttribute('src', 'img/masc/idoso.jpg')
                img.style.width = '120px'
                img.style.height = '120px'
                img.style.border = 'none'
                img.style.borderRadius = '50%'
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // CRIANÇA
                img.setAttribute('src', 'img/fem/crianca.jpg')
                img.style.width = '150px'
                img.style.height = '150px'
                img.style.border = 'none'
                img.style.borderRadius = '50%'
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'img/fem/jovem.jpg')
                img.style.width = '120px'
                img.style.height = '120px'
                img.style.border = 'none'
                img.style.borderRadius = '50%'
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'img/fem/adulta.jpg')
                img.style.width = '120px'
                img.style.height = '120px'
                img.style.border = 'none'
                img.style.borderRadius = '50%'
            } else {
                // Idoso
                img.setAttribute('src', 'img/fem/idosa.jpg')
                img.style.width = '120px'
                img.style.height = '120px'
                img.style.border = 'none'
                img.style.borderRadius = '50%'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}