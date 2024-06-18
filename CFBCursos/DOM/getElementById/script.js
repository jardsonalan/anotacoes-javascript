// Retorna apenas um elemento, diretamente

let c1 = document.getElementById('c1');
let c2 = document.getElementById('c2');
let c3 = document.getElementById('c3');
let c4 = document.getElementById('c4');
let c5 = document.getElementById('c5');
let c6 = document.getElementById('c6');

const arrayElements = [c1, c2, c3, c4, c5, c6];

/*
// Muda todos os conteúdos dos elementos da Array para 'Hello'

for (d of arrayElements) {
    d.innerHTML = 'Hello';
}
*/

// Percorre todos os elementos da Array
arrayElements.map((el, i) => {
    el.innerHTML = 'Hello' // Muda o conteúdo dos elementos para 'Hello'
    console.log(el);
})

// console.log(arrayElements);