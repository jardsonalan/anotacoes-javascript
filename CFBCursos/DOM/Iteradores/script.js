/*
// Coleções iteráveis

- Arrays
- String
- Map
- Sets
*/

const valores = [10, 8, 9, 2];
const iteradorValores = valores[Symbol.iterator]()

console.log(iteradorValores.next().value); // done: false - indica que não chegou ao final
console.log(iteradorValores.next().value);
console.log(iteradorValores.next().value);
console.log(iteradorValores.next().value);
console.log(iteradorValores.next().value);

const texto = 'YouTube';
const iteradorTexto = texto[Symbol.iterator]()

console.log(texto);
console.log(iteradorTexto.next());
console.log(iteradorTexto.next());
console.log(iteradorTexto.next());
console.log(iteradorTexto.next());
console.log(iteradorTexto.next());
console.log(iteradorTexto.next());
console.log(iteradorTexto.next());
console.log(iteradorTexto.next());