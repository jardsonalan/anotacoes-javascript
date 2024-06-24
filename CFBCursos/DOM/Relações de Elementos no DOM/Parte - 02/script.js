const caixa1 = document.querySelector('#caixa1');
const btn_c=[...document.querySelectorAll('.curso')];
const c1_2 = document.querySelector('#c1_2');

// Verifica se o elemento (caixa1) possui algum elemento (filho/child) - retorna (true/false)
console.log(caixa1.hasChildNodes());
console.log(btn_c[0].hasChildNodes()); // Retorna (true) por causa do text
console.log(btn_c[0].childNodes);

// Verifica se o elemento possui filhos
// Opção 1
if (caixa1.children.length > 0) {
    console.log('Possui filhos');
} else {
    console.log('Não possui filhos');
}

// Opçao 2
console.log(caixa1.children.length > 0 ? 'Possui filhos' : 'Não possui filhos');

console.log(caixa1.children[1].innerHTML='teste');

// Retorna o elemento anterior (elemento pai/mãe)
console.log(c1_2.parentNode);

console.log(c1_2.parentElement);

// Retorna o elemento avô
console.log(c1_2.parentNode.parentNode.parentNode);

// Pega um elemento especifíco da estrutura
console.log(c1_2.parentNode.parentNode.parentNode.children[4]);