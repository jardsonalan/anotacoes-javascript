const pArray = document.querySelector('#array');
const btnVerificar = document.querySelector('#btnVerificar');
const res = document.querySelector('#resultado');

const elementosArray = [21, 25, 19, 20, 18, 18, 22];
pArray.innerHTML = `[${elementosArray}]`;

btnVerificar.addEventListener('click', (evt) => {
    const retorno = elementosArray.every((el, index) => {
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