/*
let i = 0;

while (i <= 10) {
    console.log('Olá ' + i);
    i++;
}
*/

// Fatoração

let n = 10;
let fat = 1;

while (n >= 1) {
    fat *= n;
    n--;
}

console.log(fat)