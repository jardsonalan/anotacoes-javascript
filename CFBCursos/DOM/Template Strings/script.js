const caixa = document.querySelector('#caixa');

const carros = ['Polo', 'Golf', 'T-Cross', 'HRV'];

let ol = '<ul>';
carros.map((el)=>{
    ol+=`<li>${el}</li>`;
})
ol+='</ul>';

const curso = 'JavaScript';
const canal = 'CFB Cursos';
const frase = `Este é o curso<br/> de ${curso} do canal ${canal}`;

caixa.innerHTML = ol;
console.log(frase);