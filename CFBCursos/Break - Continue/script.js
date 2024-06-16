/*
// Break

let n = 0;
let max = 20;

while (n < max) {
    console.log(`Posição: ${n}`);
    if (n > 10) {
        break;
    }
    n++;
}
*/

let n = 1;
let max = 20;
let pares = 0;

for (let i=n; i<max; i++){
    if (i % 2 != 0) {
        continue;
    }
    pares++;
}

console.log(`Quantidade de pares: ${pares}`);