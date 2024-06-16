function calcular() {
    let number = document.querySelector('input#txtnumber')
    let res = document.querySelector('select#res')

    let numberInt = Number(number.value)

    if (numberInt == 0) {
        alert('Operação indisponível')
    } else {
        let c = 1
        res.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${numberInt} x ${c} = ${numberInt * c}`
            item.value = `tab${c}`
            res.appendChild(item)
            c++
        }
    }
}