const Pessoa = {
    nome: null,
    idade: null,
    getNome:function(){
        return this.nome;
    },
    getIdade:function(){
        return this.idade;
    },

    setNome:function(nome){
        return this.nome = nome;
    },
    setIdade:function(idade){
        return this.idade = idade;
    }
}

const btnAdd = document.querySelector('#btn_add');

btnAdd.addEventListener('click', (el)=>{
    const nome = document.querySelector('#f_nome');
    const idade = document.querySelector('#f_idade');
    const res = document.querySelector('.res');

    Pessoa.setNome(nome.value);
    Pessoa.setIdade(idade.value);

    const div = document.createElement('div');
    div.setAttribute('class', 'pessoa');
    div.innerHTML = `Nome: ${Pessoa.getNome()} <br/>Idade: ${Pessoa.getIdade()}<br/>`;

    res.appendChild(div);
})

// const p2 = Pessoa;

// p2.nome = 'Alan';
// p2['nome']='Vieira';
// Pessoa.setNome('Silva');

// console.log(Pessoa.nome)
// console.log(p2.nome)
// console.log(p2.getNome())