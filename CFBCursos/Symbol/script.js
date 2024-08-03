// Aula - 01

// const s1 = Symbol()
// const s2 = Symbol()
// const s3 = Symbol.for('Jardson')
// const s4 = Symbol.for('Alan')

// console.log(s1)
// console.log(s2)

// console.log(s3 == s4)

// console.log(typeof(s1))

// console.log(Symbol.keyFor(s1))
// console.log(Symbol.keyFor(s3))
// console.log(Symbol.keyFor(s4))

// Aula - 02

// class Jogador{
//     constructor(nome){
//         this.id=Symbol()
//         this.nome=nome
//     }
// }

// let jogadores = [new Jogador('j1'), new Jogador('j2'), new Jogador('j3'), new Jogador('j4'), new Jogador('j1'), new Jogador('j3')]

// // let s1 = jogadores[2].id

// let s=[]

// let s_jogadores=jogadores.filter((j)=>{
//     return j.nome=='j1'
// })

// s=s_jogadores.map((j)=>{
//     return j.id
// })

// console.log(jogadores)
// console.log(s_jogadores)
// console.log(s)

// Aula - 03

const nome=Symbol('nome')
const numero=Symbol('numero')
const corUniforme=Symbol('cor do uniforme')

const Jogador ={
    nome: 'j1'
    // [nome]:'j1', // Associando ao Symbol()
    // [numero]: 10,
    // [corUniforme]: 'vermelho'
}

Jogador[numero]=10
Jogador[corUniforme]='vermelho'

for(p in Jogador){
    console.log(p)
}

// console.log(nome.description)
console.log(Jogador)
console.log(Jogador.nome)
console.log(Jogador[numero])
console.log(Jogador[corUniforme])