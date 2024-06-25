const pArray = document.querySelector('#array');
const btnReduzir = document.querySelector('#btnReduzir');
const res = document.querySelector('#resultado');

const elementosArray = [1, 2, 3, 4, 5];
let ant = [];
let atu = [];
let dobro = [];

pArray.innerHTML = `[${elementosArray}]`;

btnReduzir.addEventListener('click', (evt) => {
    dobro.push(elementosArray[0]*2);
    res.innerHTML = elementosArray.reduce((retorno, atual, posicao) => {
        ant.push(retorno);
        atu.push(atual);
        dobro.push(atual*2);
        return atual+retorno;
    })
    res.innerHTML += `<br/>Valor Anterior: ${ant} <br/>Valor Atual: ${atu} <br/>Dobro: ${dobro}`;
});