let nome = new String('Jardson Alan 2005')
let email = 'jardson@email.com'
let numeros = '1, 10, 100, 1000'

console.log(nome)

console.log(nome.search(/alan/i)) // i: Modificador que indica o NÃO uso do case-sensitive

console.log(nome.match(/a/g)) // g: Retorna todos os caracteres

console.log(nome.match(/a/ig)) // ig: Ignora o case-sensitive e retorna todos os caracteres

console.log(nome.replace(/a/ig, 'Teste'))

console.log(nome.match(/[a-j|j-z|0-9]/ig))

// Metacaracteres
console.log(nome.match(/\d/ig)) // Retorna apenas o que é númerico
console.log(nome.match(/\s/ig)) // Retorna apenas os espaços
console.log(nome.match(/\ba/ig)) // Retorna os caracteres

// Quantificadores
console.log(numeros)
console.log(nome.match(/a+|o+/ig))
console.log(numeros.match(/10/ig))
console.log(numeros.match(/10+/ig))
console.log(numeros.match(/10*/ig))
console.log(numeros.match(/10?/ig))