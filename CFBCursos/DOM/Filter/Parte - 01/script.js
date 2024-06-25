// const filtro = (valor, posicao, array) => {}

/*
const filtroMaior18 = (valor) => {
    if (valor >= 18) {
        return valor;
    }
}
*/

const idades = [15, 21, 30, 17, 18, 44, 12, 50];

const maior = idades.filter((valorM) => {
    if (valorM >= 18) {
        return valorM;
    }
});

const menor = idades.filter((valorm) => {
    if (valorm < 18) {
        return valorm;
    }
})

console.log(idades);
console.log(maior);
console.log(menor);