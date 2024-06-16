let num = [5, 8, 2, 9, 3]

let pos = num.indexOf(10)

if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição: ${pos}`)
}

// console.log(num)

// for (let pos in num) {
//     console.log(`A posição ${pos} tem o valor ${num[pos]}`)
// }

// console.log(`O valor 5 está na posição: ${num.indexOf(5)}`)

// for (let pos = 0; pos < num.length; pos++) {
//     console.log(`A posição ${pos} tem o valor ${num[pos]}`)
// }

// let pos = 0

// while (pos < num.length) {
//     console.log(`A posição ${pos} tem o valor ${num[pos]}`)
//     pos++
// }

// num.sort()
// num.push(1)

// console.log(num)
// console.log(`Nosso vetor tem ${num.length} posições`)
// console.log(`O primeiro valor do vetor é ${num[0]}`)