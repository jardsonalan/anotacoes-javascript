/*
// Declaração da Função
function soma() {
    let n1 = 2;
    let n2 = 10;
    let soma = n1 + n2;
    console.log(soma);
}

// nome(); // Chamada da Função

for (let i=0; i<10; i++) {
    soma()
}
*/

function mudarTexto() {
    let div1 = getSelection('#d1');
    let div2 = getSelection('#d2');
    let div3 = getSelection('#d3');

    d1.innerHTML = 'Curso 1';
    d2.innerHTML = 'Curso 2';
    d3.innerHTML = 'Curso 3';
}