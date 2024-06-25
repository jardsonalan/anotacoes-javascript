const pArray = document.querySelector('#array');
const btnVerificar = document.querySelector('#btnVerificar');
const res = document.querySelector('#resultado');

const elementosArray = [16, 12, 20, 10, 17, 15, 13, 11];
pArray.innerHTML = `[${elementosArray}]`;

btnVerificar.addEventListener('click', (evt) => {
    const retorno = elementosArray.some((el, index) => {
        if (el < 18) {
            res.innerHTML = `Array não conforme na posição: ${index}`;
        }
        return el >= 18;
    });
    if (retorno) {
        res.innerHTML = 'OK'
    }
    // console.log(retorno);
});