const valor1 = document.querySelector('#primeiro-valor');
const valor2 = document.querySelector('#segundo-valor');
const btnSoma = document.querySelector('#btnSoma');
const btnSub = document.querySelector('#btnSub');
const btnMult = document.querySelector('#btnMult');
const btnDiv = document.querySelector('#btnDiv');
const resultado = document.querySelector('#res');

// Meu código

const op = [
    (val1, val2) => {
        val1 = Number(valor1.value);
        val2 = Number(valor2.value);
        let res = val1 + val2;
        resultado.innerHTML = res;
    },
    (val1, val2) => {
        val1 = Number(valor1.value);
        val2 = Number(valor2.value);
        let res = val1 - val2;
        resultado.innerHTML = res;
    },
    (val1, val2) => {
        val1 = Number(valor1.value);
        val2 = Number(valor2.value);
        let res = val1 * val2;
        resultado.innerHTML = res;
    },
    (val1, val2) => {
        val1 = Number(valor1.value);
        val2 = Number(valor2.value);
        if (val2 != 0) {
            let res = val1 / val2;
            resultado.innerHTML = res;
        } else {
            resultado.innerHTML = 'Impossível dividir por 0';
        }
    }
];

btnSoma.addEventListener('click', op[0]);
btnSub.addEventListener('click', op[1]);
btnMult.addEventListener('click', op[2]);
btnDiv.addEventListener('click', op[3]);

// console.log(op[0](valores));
// op[2](valores);


/*
// Código do professor

const op = [
    // Soma
    ()=>{
        const val = [valor1.value, valor2.value];
        resultado.value = Number(val[0])+Number(val[1]);
        resultado.innerHTML = resultado.value;
    },
    // Subtração
    ()=>{
        const val = [valor1.value, valor2.value];
        resultado.value = Number(val[0])-Number(val[1]);
        resultado.innerHTML = resultado.value;
    },
    // Multiplicação
    ()=>{
        const val = [valor1.value, valor2.value];
        resultado.value = Number(val[0])*Number(val[1]);
        resultado.innerHTML = resultado.value;
    },
    // Divisão
    ()=>{
        const val = [valor1.value, valor2.value];
        resultado.value = Number(val[0])/Number(val[1]);
        resultado.innerHTML = resultado.value;
    }
];

btnSoma.addEventListener('click', op[0])
btnSub.addEventListener('click', op[1])
btnMult.addEventListener('click', op[2])
btnDiv.addEventListener('click', op[3])
*/