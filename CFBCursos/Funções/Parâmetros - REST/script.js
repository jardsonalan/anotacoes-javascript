// Parâmetros REST

function soma(...valores) {
    let tam = valores.length;
    let  res = 0;

    for (let v of valores) {
        res+=v;
    }
    /*
    for (let i=0; i<tam;i++) {
        res+=valores[i];
    }
        */
    return res;
}

let res = soma(10, 5, 2, 3);
console.log(res);