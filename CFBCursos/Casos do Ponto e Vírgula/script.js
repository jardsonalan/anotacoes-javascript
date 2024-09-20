// let i = null
// for (i=0; i<10; i++) {
//     console.log(i)  // Exibe toda a sequência (0 até 9)
// }

// let i = null
// for (i=0; i<10; i++);
//     console.log(i)  // Exibe apenas o resultado de i

// let i=null; i=0 // Diz que a instrução terminou aqui
// console.log(i)

// Sempre é obrigatório (;) quando a próxima linha começar com [] ou ()

// let canal = 'youtube';
// ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't'].forEach(l => console.log(l));

// let n1 = [1, 2]
// let n2 = [3, 4];
// [n1, n2].map(el=>console.log(el))

// let n = null;
// (n=10)
// console.log(n)

// let numeros = [10, 20, 30]; // Usa o ponto e vírgula
// [n1, n2, n3]=numeros // Ou declara [n1, n2, n3] como uma variável ou uma constante (var, let ou const)
// console.log(n1, n2, n3)

let num = {
    n1:10,
    n2:20, 
    n3:30
}
let {n1, n2, n3}=num
console.log(n1, n2, n3)