// querySelector: retorna apenas um elemento, no caso, a primeira (div)
const querySel = document.querySelector('div');

console.log(querySel);

// querySelectorAll: retorna todos os elementos, no caso, todas as (div)
const querySelAll = [...document.querySelectorAll('div')];

console.log(querySelAll);

// Pega todas as class com o valor (curso)
const queryAllCursos = [...document.querySelectorAll('.curso')];

console.log(queryAllCursos);

// Pega todas as class com o valor (c1)
const queryAllCursosC1 = [...document.querySelectorAll('.c1')];

console.log(queryAllCursosC1);

// Pega todas as class com o valor (c2)
const queryAllCursosC2 = [...document.querySelectorAll('.c2')];

console.log(queryAllCursosC2);

// Retorna o elemento com ID (c1)
// const queryId = document.querySelector('#c1');

// Retorna o elemento com ID (c1) na posição 0
const queryId = document.querySelectorAll('#c1')[0];

console.log(queryId);

// Pegar elementos diferentes, dentro da querySelectorAll
// const queryDifElements = [...document.querySelectorAll('div, p')];

// Pegar elementos com class (c1) e elementos com tag (p)
const queryDifElements = [...document.querySelectorAll('.c1, p')];

console.log(queryDifElements);

// Pegar elementos com atributos específicos
const queryElementsEsp = [...document.querySelectorAll('div[class]')];

console.log(queryElementsEsp);

// Pegar todos elementos (p) que estão dentro de elementos (div)
const queryElementsDivP = [...document.querySelectorAll('div > p')];

console.log(queryElementsDivP);