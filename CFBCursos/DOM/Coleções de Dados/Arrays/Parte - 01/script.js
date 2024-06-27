let cores = ['azul', 'verde', 'vermelho', ['claro', 'escuro', 'medio']];
let cursos = ['HTML', 'CSS', 'JavaScript', cores]; // Matriz
const caixa = document.querySelector('.caixa');

// cursos[0] = 2023;

// cursos.push('C++');
// cursos.push('Python'); // Adiciona elemento no final da Array
// cursos.unshift('Python'); // Adiciona elemento no início da Array
// cursos.pop(); // Remove elemento no final da Array
// cursos.shift(); // Remove elemento no início da Array

console.log(cursos[3][3][2]); // Matriz

cursos.map((el)=>{
    let p = document.createElement('p');
    p.innerHTML = el;
    caixa.appendChild(p);
});