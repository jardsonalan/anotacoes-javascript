const caixa1 = document.querySelector('#caixa1');
const btn_c=[...document.querySelectorAll('.curso')];

const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React', 'MySQL', 'React Native'];

cursos.map((el, index) => {
    const newElement = document.createElement('div');
    newElement.setAttribute('id', `c${index+1}`);
    newElement.setAttribute('class', 'curso c1');
    newElement.innerHTML = el;
    caixa1.appendChild(newElement);
})

console.log(caixa1.children);

/*
const newElement = document.createElement('div'); // Cria um novo elemento
newElement.setAttribute('id','c7'); // Adiciona um ID com valor (c7)
newElement.setAttribute('class','curso c1'); // Adiciona uma CLASS com valor (curso c1)
newElement.innerHTML = 'React Native';
caixa1.appendChild(newElement); // Adiciona o elemento como elemento (filho/child) de (caixa1)
*/