class Pessoa {
    constructor(pnome, pidade){
        this.nome = pnome;
        this.idade = pidade;
    }
    getNome(){
        return this.nome;
    }
    getIdade(){
        return this.idade;
    }

    setNome(nome){
        this.nome = nome;
    }
    setIdade(idade){
        this.idade = idade;
    }

    info(){
        console.log(`Nome: ${this.nome}`);
        console.log(`Idade: ${this.idade}`);
        console.log('-----------------');
    }
}

let pessoas = [];

const btnAdd = document.querySelector('#btn_add');
const res = document.querySelector('.res');

const addPessoa=()=>{
    res.innerHTML = '';
    pessoas.map((el)=>{
        const div = document.createElement('div');
        div.setAttribute('class','pessoa');
        div.innerHTML = `Nome: ${el.getNome()} <br/> Idade: ${el.getIdade()}`;
        res.appendChild(div);
    });
}

btnAdd.addEventListener('click', (evt)=>{
    const nome = document.querySelector('#f_nome');
    const idade = document.querySelector('#f_idade');
    const p = new Pessoa(nome.value, idade.value);
    pessoas.push(p);
    nome.value = '';
    idade.value = '';
    nome.focus();
    addPessoa();
})