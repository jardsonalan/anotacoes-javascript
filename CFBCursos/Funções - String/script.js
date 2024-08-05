let nome = new String('Jardson')
let sobrenome = new String('Alan')

console.log(nome)
console.log(typeof(nome))

console.log(nome.charAt(0)) // Retorna o carácter da posição especificada

console.log(nome.charCodeAt(0)) // Retorna o código do carácter especificado

console.log(nome.concat(sobrenome)) // Faz a concatenação de strings

console.log(nome.indexOf('d')) // Retorna a primeira posição do carácter especificado

console.log(nome.lastIndexOf('s')) // Retorna a última posição do carácter especificado

console.log(nome.localeCompare(sobrenome)) // Faz a comparação entre objetos strings - Retorno 1 ou -1 = Diferentes | Retorno 0 = Iguais

console.log(nome.replace('J', 'P')) // Substitue determinado carácter pelo indicado

console.log(nome.search('a')) // Encontra a primeira ocorrência da string pesquisada

console.log(nome.slice(1,4)) // Faz o corte da string

console.log(nome.split('r')) // Retorna um array do ponto indicado para divisão

console.log(nome.substring(0,3)) // Permite retornar parte de uma string

console.log(nome.toUpperCase()) // Converte para maiúsculo

console.log(nome.toLowerCase()) // Converte para minúsculo

console.log(nome.valueOf()) // Retorna o valor primitivo da string

let num = 10
num=num.toString() // Converte qualquer valor para um tipo string
console.log(typeof(num))

console.log(nome.startsWith('Jar')) // Verifica se a string começa com o valor indicado

console.log(nome.endsWith('son')) // Verifica se a string termina com o valor indicado

console.log(nome.includes('rd')) // Verifica se em alguma parte da string existe o valor indicado

console.log(nome.repeat(4)) // Repete a string com a quantidade de vezes indicada

console.log(String.fromCodePoint(74)) // Retorna o carácter a partir do código ask dos carácteres