// Utiliza o (this) tanto nos métodos, quanto nas propriedades

function Pessoa(pnome, pidade){
    this.nome = pnome, // Em uma função, separa os elementos por vírgula
    this.idade = pidade,

    this.getNome=function(){
        return this.nome;
    },
    this.getIdade=function(){
        return this.idade;
    },

    this.setNome=function(nome){
        this.nome = nome;
    },
    this.setIdade=function(idade){
        this.idade = idade;
    },

    this.info=function(){
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