// Retorna um conjunto de elementos

const cursosAll = [...document.getElementsByClassName('curso')]
const cursosC1 = [...document.getElementsByClassName('c1')]
const cursosC2 = [...document.getElementsByClassName('c2')]

const cursoEspecial = document.getElementsByClassName('curso')[6]

console.log(cursoEspecial)
console.log(cursosAll)
console.log(cursosC1)
console.log(cursosC2)

// cursosAll.map((e) => {
//     e.classList.add('destaque');
// })

// cursosC1.map((e) => {
//     e.classList.add('destaque');
// })

cursosC2.map((e) => {
    e.classList.add('destaque');
})