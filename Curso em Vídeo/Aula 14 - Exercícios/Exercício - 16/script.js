function contar() {
    let numberInicio = document.querySelector('input#txtinicio')
    let numberFinal = document.querySelector('input#txtfinal')
    let numberPasso = document.querySelector('input#txtpasso')
    let res = document.querySelector('div#res')

    if (numberInicio.value.length == 0 || numberFinal.value.length == 0 || numberPasso.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        // alert('[ERRO] Faltam dados')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(numberInicio.value)
        let f = Number(numberFinal.value)
        let p = Number(numberPasso.value)

        if (p <= 0) {
            p = 1
        }

        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}