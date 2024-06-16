// Funções Anônimas

/*
let f = function(v1, v2) {
    return v1 + v2;
}

let res = f(10, 5)
console.log(res)
*/

/*
let f = function(...valores) {
    let res = 0;
    for(v of valores){
        res+=v;
    }
    return res;
}

let resultado = f(10, 5);
console.log(resultado);
*/

// Função Construtor Anônima

const f = new Function('v1', 'v2', 'return v1 + v2');

console.log(f(10, 10))