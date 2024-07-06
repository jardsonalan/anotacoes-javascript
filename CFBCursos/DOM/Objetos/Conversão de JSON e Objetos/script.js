const pessoa = {
    nome:'Jardson',
    canal:'YouTube',
    curso:'JavaScript',
    aulas: {
        aula01:'Introdução',
        aula02:'Variáveis',
        aula03:'Condicional'
    }
}

// Converte o objeto literal em uma string JSON
const stringJson=JSON.stringify(pessoa)

const stringPessoa = '{"nome":"Jardson","canal":"YouTube","curso":"JavaScript","aulas":{"aula01":"Introdução","aula02":"Variáveis","aula03":"Condicional"}}'

// Converte uma string JSON em um Objeto
const stringJsonObjt = JSON.parse(stringJson)

console.log(pessoa)
console.log(stringJson)
console.log(stringJsonObjt)

// console.log(pessoa)
// console.log(pessoa.nome)
// console.log(pessoa.aulas)
// console.log(pessoa.aulas.aula01)