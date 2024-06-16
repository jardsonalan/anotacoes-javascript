/*
// Forma 1

const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP'];

cursos.map((el, i) => {
    console.log(`Curso: ${el} - Posição do curso: ${i}`);
})
*/

/*
// Retorno de Elementos - 1º Forma - Simples

const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP'];

let c = cursos.map((el, i) => {
    return el;
})

console.log(c);
*/

/*
const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP'];

let c = cursos.map((el, i) => {
    return `<div> ${el} </div>`; // Não é um elemento DIV
})

console.log(c);
*/

/*
// Atualiza todos os textos dentro das div para Curso

let el = document.getElementsByTagName('div');
el = [...el];
el.map((e, i) => {
    e.innerHTML = 'Curso';
})
*/

/*
// Retorno de Elementos - 2º Forma

const el = document.getElementsByTagName('div');
const val = Array.prototype.map.call(el, ({innerHTML}) => innerHTML);
console.log(val)
*/

const converterInt = (e) => parseInt(e);
const dobrar = (e) => e * 2;

let num = ['0', '1', '2'].map(converterInt);
console.log(num)
num = ['0', '1', '2'].map(dobrar);
console.log(num)