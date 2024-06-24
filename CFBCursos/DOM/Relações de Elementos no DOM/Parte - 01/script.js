const caixa1 = document.querySelector('#caixa1');
const btn_c=[...document.querySelectorAll('.curso')];

// Pega todos os elementos (filhos/childs) de (#caixa1);
console.log(caixa1.children);

// Pega o primeiro elemento (filho/child) de (#caixa1)
console.log(caixa1.children[0]);

console.log(caixa1.firstElementChild);

// Pega o último elemento (filho/child) de (#caixa1)
console.log(caixa1.children[caixa1.children.length - 1]);

console.log(caixa1.lastElementChild);

// Pega o nó raiz do site
console.log(document.getRootNode());

// Pega o nó raiz de um elemento
console.log(btn_c[0].getRootNode());
console.log(btn_c[0].ownerDocument);