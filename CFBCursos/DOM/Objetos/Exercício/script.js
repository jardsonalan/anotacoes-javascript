const tipoMilitar = document.querySelector('#f_tipoMilitar');
const tipoNormal = document.querySelector('#f_tipoNormal');
const f_blindagem = document.querySelector('#f_blindagem');
const f_municao = document.querySelector('#f_municao');
const carros = document.querySelector('#carros');
const btn_addCarro = document.querySelector('#btn_addCarro');
const f_nome = document.querySelector('#f_nome');
const f_portas = document.querySelector('#f_portas');

let listaCarros = [];

const removerCarro = (qm) => {
    listaCarros=listaCarros.filter((el)=>{
        return el.nome!=qm;
    })
}

tipoMilitar.addEventListener('click', (evt)=>{
    f_nome.value='';
    f_portas.value=0;
    f_blindagem.value=0;
    f_municao.value=0;
    f_blindagem.removeAttribute('disabled');
    f_municao.removeAttribute('disabled');
});

tipoNormal.addEventListener('click', (evt)=>{
    f_blindagem.setAttribute('disabled', 'disabled');
    f_municao.setAttribute('disabled', 'disabled');
    f_blindagem.value=0;
    f_municao.value=0;
});

const gerenciarExibicaoCarros = () => {
    carros.innerHTML='';
    listaCarros.map((el)=>{
        const div = document.createElement('div');
        const btn = document.createElement('button');
        btn.addEventListener('click', (evt)=>{
            const qmRemover = evt.target.parentNode.dataset.nome;
            removerCarro(qmRemover);
            gerenciarExibicaoCarros();
        })
        div.setAttribute('class', 'carro');
        div.setAttribute('data-nome', el.nome);
        div.innerHTML = `Nome: ${el.nome} <br/>`;
        div.innerHTML += `Portas: ${el.portas} <br/>`;
        div.innerHTML += `Cor: ${el.cor} <br/>`;
        div.innerHTML += `Blindagem: ${el.blindagem} <br/>`;
        div.innerHTML += `Munição: ${el.municao} <br/>`;
        btn.innerHTML = 'Remover';
        div.appendChild(btn);
        carros.appendChild(div);
    })
}

btn_addCarro.addEventListener('click', (evt)=>{
    if(tipoNormal.checked){
        
        const c = new Carro(f_nome.value, f_portas.value);
        listaCarros.push(c);
    }else{
        const c = new Militar(f_nome.value, f_portas.value, f_blindagem.value, f_municao.value);
        listaCarros.push(c);
    }
    gerenciarExibicaoCarros();
})

class Carro { // Classe Pai
    constructor(nome, portas){
        this.nome = nome;
        this.portas = portas;
        this.ligado = false;
        this.vel = 0;
        this.cor = undefined;
    }

    ligar = () => {
        this.ligado = true;
    }

    desligar = () => {
        this.ligado = false;
    }

    setCor = (cor) => {
        this.cor = cor;
    }
}

class Militar extends Carro { // Classe Filho
    constructor(nome, portas, blindagem, municao){
        super(nome, portas);
        this.blindagem = blindagem;
        this.municao = municao;
        this.setCor('Verde');
    }
    atirar = () => {
        if(this.municao > 0) {
            this.municao--;
        }
    }
}

class Utilitario extends Carro {
    constructor(nome, portas, lugares) {
        super(nome, portas);
        this.lugares = lugares;
    }
}

const c1 = new Carro('Normal', 4);
c1.ligar();
c1.setCor('Preto');

const c2 = new Militar('Lutador', 1, 100, 50);
c2.atirar();
c2.atirar();
c2.atirar();
c2.atirar();
c2.atirar();
// c2.setCor('Azul');

console.log(`Nome: ${c1.nome}`);
console.log(`Portas: ${c1.portas}`);
console.log(`Ligado: ${(c1.ligado)?'Sim':'Não'}`);
console.log(`Velocidade: ${c1.vel}`);
console.log(`Cor: ${c1.cor}`);
console.log(`Lugares: ${c1.lugares}`);
console.log('-------------------------');

console.log(`Nome: ${c2.nome}`);
console.log(`Portas: ${c2.portas}`);
console.log(`Ligado: ${(c2.ligado)?'Sim':'Não'}`);
console.log(`Velocidade: ${c2.vel}`);
console.log(`Munição: ${c2.municao}`);
console.log(`Blindagem: ${c2.blindagem}`);
console.log(`Cor: ${c2.cor}`);
console.log('-------------------------');