const caixa = document.querySelector('#caixa');

let msc = new Set(['música1', 'música boa', 'música10']);

msc.add('música muito legal');
msc.add('música1');
msc.add('música1');
msc.add('música10');

msc.delete('música1');
msc.clear();

console.log(msc)

// msc.forEach((el)=>{
//     caixa.innerHTML += `${el} <br/>`;
// })

for (let m of msc) {
    caixa.innerHTML += `${m} <br/>`;
}