// let a, b, c, d

// let numeros = [10, 20, 30, 40]
// let[a,b,c,d]=numeros

// Array
// [a, b, c, d]=[10, 20, 30, 40]
// [a, b, c, d]=['verde', 'amarelo', 'azul', 'branco']

// Objetos
// ({a, b, c, d}={a: 'verde', b: 'amarelo', c: 'azul', d: 'branco'})

// let a, b, c, d
// [a, b=0, c=0, d=0]=[10]

// let a=10;
// let b=20;
// [a,b]=[b,a]

let numeros = ()=>{
    return [10, 20, 30, 40]
}
let [a,b,c,d]=numeros()

// console.log(numeros())

console.log(a,b,c,d)