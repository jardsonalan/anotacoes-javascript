let number = document.querySelector('input#txtnumber')
let selec = document.querySelector('select#selec')
let res = document.querySelector('div#res')
let values = []


function isNumber (n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList (n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function addNumber() {
    if(isNumber(number.value) && !inList(number.value, values)) {
        values.push(Number(number.value))
        let item = document.createElement('option')
        item.text = `Valor ${number.value} adicionado`
        selec.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    number.value = ''
    number.focus()
}

function finishExec () {
    if (values.length == 0) {
        alert('Adicione valores antes de finalizar.')
    } else {
        let total = values.length
        let maior = values[0]
        let menor = values[0]
        let soma = 0
        let media = 0

        for(let pos in values) {
            soma += values[pos]
            if (values[pos] > maior) {
                maior = values[pos]
            }

            if (values[pos] < menor) {
                menor = values[pos]
            }
        }
        media = soma / total

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}



/*

// Função para adicionar números na lista

function addNumber() {

    // Alerta de Erro: Caso não tenha nenhum número ou número igual a 0

    if (numberInt == 0) {
        alert('[ERRO] Por favor, informe um número!')
    } else {
        let list = []

        // Adiciona número na Array

        if (list.indexOf(numberInt) == -1 && numberInt < 100) {
            let addList = function (x) {
                list.push(x)
                let item = document.createElement('option')
                item.text = `Valor ${x} adicionado`
                res.appendChild(item)
            }

            addList(numberInt)

        // Alerta de Erro: Caso número já esteja adicionado

        } else {
            alert('Este número já se encontra na lista ou é inválido!')
        }
    }
}

*/