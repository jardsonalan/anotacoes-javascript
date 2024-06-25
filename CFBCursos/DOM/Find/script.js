const pArray = document.querySelector('#array');
const txtPesquisar = document.querySelector('#txt-pesquisar');
const btnPesquisar = document.querySelector('#btnPesquisar');
const res = document.querySelector('#resultado');

// const elementosArray = [10, 5, 8, 2, 9, 15, 20];

const elementosArray = ['HTML', 'CSS', 'JavaScript'];

pArray.innerHTML = `[${elementosArray}]`;

btnPesquisar.addEventListener('click', (evt) => {
    res.innerHTML = 'Valor não encontrado';
    const retorno = elementosArray.find((el, index) => {
        if (el.toUpperCase() == txtPesquisar.value.toUpperCase()) {
            res.innerHTML = `Valor encontrado ${el} na posição ${index}`;
            return el;
        }
    });
    console.log(retorno);
})