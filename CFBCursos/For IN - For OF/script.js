/*
// Mostra os elementos da Array

let num = [10, 20, 30, 40];

for (let i=0; i<num.length; i++){
    console.log(num[i]);
}
*/

/*
// For in / For of
let num = [10, 20, 30, 40];

// Pegar posições
for (n in num) {
    console.log(n)
}

// Pegar elementos
for (n of num) {
    console.log(n)
}
*/

const objs = document.getElementsByTagName('div');

for (o of objs) {
    console.log(o.innerHTML = 'Curso');
}

for (o in objs) {
    console.log(objs[o].innerHTML);
}