// Consumindo arquivos do computador

const canal = document.querySelector('#canal');
const nome = document.querySelector('#nome');
const curso = document.querySelector('#curso');

const endPoint = 'texto.txt';

fetch(endPoint)
.then(res=>res.text())
.then(res=>{
    res=JSON.parse(res);
    canal.innerHTML = `Canal: ${res.canal}`;
    nome.innerHTML = `Nome: ${res.nome}`;
    curso.innerHTML = `Curso: ${res.curso}`;
});