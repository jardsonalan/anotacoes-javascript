let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90]
let[a,b,c,...d]=numeros

let obj={nome: 'Jardson', canal: 'YT', linguagem: 'JavaScript'}

let {nome, canal, linguagem} = obj

// console.log(nome,canal,linguagem)
// console.log(a,b,c,d)

const cores=()=>{
    return ['verde', 'amarelo', 'azul', 'branco']
}

let [c1, c2,, c3]=cores()

console.log(c1, c2, c3)

let texto='Curso de JavaScript'
let[p1,p2,p3] = texto.split(' ')
console.log(p1,p2,p3)