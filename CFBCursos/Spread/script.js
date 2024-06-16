/*
Concatenação e cópia de Arrays

let n1 = [10, 20, 30];
let n2 = [11, 22, 33, 44, 55];
let n3 = [...n1]; // Cópia de Array
let n4 = [...n1, ...n2] // Concatenação de Arrays
*/

/*
Concatenação e cópia de Objetos

console.log(`n1: ${n1}`);
console.log(`n2: ${n2}`);
console.log(`n3: ${n3}`);

const jogador1 = {nome: 'Jardson', energia: 100, vidas: 3, magia: 150};
const jogador2 = {nome: 'Alan', energia: 100, vidas: 5, velocidade: 80};
const jogador3 = {...jogador1, ...jogador2};

console.log(jogador3);
*/

/*
Distribuição de valores para uma Function

const soma = (v1, v2, v3) => {
    return v1+v2+v3;
}

let valores = [1, 2, 3]

console.log(soma(...valores))
*/

const objs1 = document.getElementsByTagName('div');

const objs2 = [...document.getElementsByTagName('div')];

objs2.forEach(element => {
    element.innerHTML = 'Curso';
});

console.log(objs2)