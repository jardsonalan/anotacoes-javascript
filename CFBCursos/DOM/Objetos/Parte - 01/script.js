class Pessoa {
    constructor(pnome){
        this.nome = pnome;
    }
}

let p1 = new Pessoa('Jardson');
let p2 = new Pessoa('Alan');
let p3 = new Pessoa('Vieira');

console.log(p1.nome);
console.log(p2.nome);
console.log(p3.nome);

// Se o construtor não recebe nenhum parâmetro, também não se passa nenhum parâmetro