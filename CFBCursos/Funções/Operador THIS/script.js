/*
function aluno (nome, nota) {
    this.nome = nome;
    this.nota = nota;

    console.log(nome);
    console.log(nota);


}

aluno('Jardson', 100);
*/

function aluno (nome, nota) {
    this.nome = nome;
    this.nota = nota;

    // O THIS não funciona
    this.dados_anonimo = function(){
        setTimeout(function(){
            console.log(this.nome);
            console.log(this.nota);
        }, 2000)
    }

    // Na Arrow Function, o THIS funciona
    this.dadod_arrow = function(){
        setTimeout(()=>{
            console.log(this.nome);
            console.log(this.nota);
        }, 2000)
    }
}

const aluno1 = new aluno('Jardson', 100);
aluno1.dados_anonimo()
aluno1.dadod_arrow()